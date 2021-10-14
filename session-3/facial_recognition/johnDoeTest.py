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

id = type('', (), {})()
groupId = ' '


# This key will serve all examples in this document.
KEY = "88ab810a183d4ecaaf7744a8be0ad9b6"

# This endpoint will be used in all examples in this quickstart.
ENDPOINT = "https://gs32bis.cognitiveservices.azure.com/"

f = open('id.txt','r')

for line in f.readlines():
     a = line.split('= ')
     b = a[1][:-2]
     print(a[0]+'test')
     if a[0] == 'TargetID':
         groupId = b
     

face_client = FaceClient(ENDPOINT, CognitiveServicesCredentials(KEY))


# Group image for testing against
test_image_array = glob.glob('resize.jpg')
image = open(test_image_array[0], 'r+b')

# Detect faces
face_ids = []
# We use detection model 3 to get better performance.
faces = face_client.face.detect_with_stream(image, detection_model='detection_03')
for face in faces:
    face_ids.append(face.face_id)

# Create an authenticated FaceClient.
face_client = FaceClient(ENDPOINT, CognitiveServicesCredentials(KEY))

# Identify faces
print('laaa -----' + groupId)
results = face_client.face.identify(face_ids, 'tim')
print('Identifying faces in {}'.format(os.path.basename(image.name)))
if not results:
    print('No person identified in the person group for faces from {}.'.format(os.path.basename(image.name)))
for person in results:
    if len(person.candidates) > 0:
        print('{} is identified in {} with a confidence of {}.'.format(person.candidates[0].person_id, os.path.basename(image.name), person.candidates[0].confidence)) # Get topmost confidence score
    else:
        print('No person identified for face ID {} in {}.'.format(person.face_id, os.path.basename(image.name)))