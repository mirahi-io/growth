import asyncio
import io
import glob
import os
import sys
import time
import uuid
import requests
from urllib.parse import urlparse
from io import BytesIO
# To install this module, run:
# python -m pip install Pillow
from PIL import Image, ImageDraw, ImageOps
from azure.cognitiveservices.vision.face import FaceClient
from msrest.authentication import CognitiveServicesCredentials
from azure.cognitiveservices.vision.face.models import TrainingStatusType, Person
import urllib.request as urllib


# This key will serve all examples in this document.
KEY = "88ab810a183d4ecaaf7744a8be0ad9b6"

# This endpoint will be used in all examples in this quickstart.
ENDPOINT = "https://gs32bis.cognitiveservices.azure.com/"


# Create an authenticated FaceClient.
face_client = FaceClient(ENDPOINT, CognitiveServicesCredentials(KEY))

# Detect a face in an image that contains a single face
single_face_image_path = 'nico1.jpg'
single_face_image  = open(single_face_image_path, 'r+b')

# We use detection model 3 to get better performance.
detected_faces = face_client.face.detect_with_stream(image=single_face_image, detection_model='detection_03')
if not detected_faces:
    raise Exception('No face detected from image')

# Display the detected face ID in the first single-face image.
# Face IDs are used for comparison to faces (their IDs) detected in other images.
print('Detected face ID:')
for face in detected_faces: print (face.face_id)
print()


# Convert width height to a point in a rectangle
def getRectangle(faceDictionary):
    rect = faceDictionary.face_rectangle
    left = rect.left
    top = rect.top
    right = left + rect.width
    bottom = top + rect.height
    
    return ((left, top), (right, bottom))

def drawFaceRectangles() :
# Download the image from the url
    img = Image.open(single_face_image)
    img = ImageOps.exif_transpose(img)

# For each face returned use the face rectangle and draw a red box.
    print('Drawing rectangle around face')
    draw = ImageDraw.Draw(img)
    for face in detected_faces:
        draw.rectangle(getRectangle(face), outline='red')
    img.save('red-outline.png')

# Uncomment this to show the face rectangles.
drawFaceRectangles()

# Used in the Person Group Operations and Delete Person Group examples.
# You can call list_person_groups to print a list of preexisting PersonGroups.
# SOURCE_PERSON_GROUP_ID should be all lowercase and alphanumeric. For example, 'mygroupname' (dashes are OK).
PERSON_GROUP_ID = 'tim' # assign a random ID (or name it anything)

# Used for the Delete Person Group example.
TARGET_PERSON_GROUP_ID = 'target' # assign a random ID (or name it anything)
print
'''
Create the PersonGroup
'''
print('Person group:', PERSON_GROUP_ID)
face_client.person_group.create(person_group_id=PERSON_GROUP_ID, name=PERSON_GROUP_ID)

# Create empty Person Group. Person Group ID must be lower case, alphanumeric, and/or with '-', '_'.
print('Person group:', PERSON_GROUP_ID)
# Define nico friend
nico = face_client.person_group_person.create(PERSON_GROUP_ID, "nico")
# Define tim friend
tim = face_client.person_group_person.create(PERSON_GROUP_ID, "tim")
# Define sam friend
sam = face_client.person_group_person.create(PERSON_GROUP_ID, "sam")
print('nico ', nico.person_id)
f = open('session-3/facial_recognition/resources/id.txt','w')
f.write("nico= "+nico.person_id+"\n")
f.write("tim= "+tim.person_id+"\n")
f.write("sam= "+sam.person_id+"\n")
f.write("GroupID= "+PERSON_GROUP_ID+"\n")
f.write("TargetID= "+TARGET_PERSON_GROUP_ID+"\n")
f.close()
#end
'''
Detect faces and register to correct person
'''
# Find all jpeg images of friends in working directory
nico_images = [file for file in glob.glob('*.jpg') if file.startswith("nico")]
tim_images = [file for file in glob.glob('*.jpg') if file.startswith("tim")]
sam_images = [file for file in glob.glob('*.jpg') if file.startswith("sam")]

# Add to a nico person
for image in nico_images:
    w = open(image, 'r+b')
    face_client.person_group_person.add_face_from_stream(PERSON_GROUP_ID, nico.person_id, w)

# Add to a tim person
for image in tim_images:
    m = open(image, 'r+b')
    face_client.person_group_person.add_face_from_stream(PERSON_GROUP_ID, tim.person_id, m)

# Add to a sam person
for image in sam_images:
    ch = open(image, 'r+b')
    face_client.person_group_person.add_face_from_stream(PERSON_GROUP_ID, sam.person_id, ch)

    '''
Train PersonGroup
'''
print()
print('Training the person group...')
# Train the person group
face_client.person_group.train(PERSON_GROUP_ID)

while (True):
    training_status = face_client.person_group.get_training_status(PERSON_GROUP_ID)
    print("Training status: {}.".format(training_status.status))
    print()
    if (training_status.status is TrainingStatusType.succeeded):
        break
    elif (training_status.status is TrainingStatusType.failed):
        face_client.person_group.delete(person_group_id=PERSON_GROUP_ID)
        sys.exit('Training the person group has failed.')
    time.sleep(5)

    '''
Identify a face against a defined PersonGroup
'''
