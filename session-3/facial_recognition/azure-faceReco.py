from urllib.parse import urlparse
from io import BytesIO
# To install this module, run:
# python -m pip install Pillow
from PIL import Image, ImageDraw, ImageOps
from azure.cognitiveservices.vision.face import FaceClient
from msrest.authentication import CognitiveServicesCredentials
from azure.cognitiveservices.vision.face.models import TrainingStatusType, Person
import urllib.request as urllib
from email_sender import *
from capture_image import *



# TODO for mac os x user be careful with the six modul not found, please do : pip install --ignore-installed six (https://stackoverflow.com/questions/13967428/importerror-no-module-named-six)


id = type('', (), {})()
groupId = ' '
sender = 'sam@mirahi.io'
receiver = 'sam@mirahi.io'
subject = 'Mirahi growth test email '
file_location = 'session-3/facial_recognition/resources/target.jpg'

# This key will serve all examples in this document.
KEY = "88ab810a183d4ecaaf7744a8be0ad9b6"

# This endpoint will be used in all examples in this quickstart.
ENDPOINT = "https://gs32bis.cognitiveservices.azure.com/"

image = captureImageTarget();

f = open('session-3/facial_recognition/resources/id.txt','r')


# FIXME : to be correct

# for line in f.readlines():
#      a = line.split('= ')
#      b = a[1][:-2]
#      print(a[0]+'test')
#      if a[0] == 'TargetID':
#          groupId = b
     

face_client = FaceClient(ENDPOINT, CognitiveServicesCredentials(KEY))


# Group image for testing against
# Detect faces
face_ids = []
# We use detection model 3 to get better performance.
faces = face_client.face.detect_with_stream(image, detection_model='detection_03')

for face in faces:
    face_ids.append(face.face_id)

# Create an authenticated FaceClient.
face_client = FaceClient(ENDPOINT, CognitiveServicesCredentials(KEY))

# Identify faces
results = face_client.face.identify(face_ids, 'tim')
print('Identifying faces in {}'.format(os.path.basename(image.name)))
if not results:
    print('No person identified in the person group for faces from {}.'.format(os.path.basename(image.name)))
for person in results:
    if len(person.candidates) > 0:
        print('{} is identified in {} with a confidence of {}.'.format(person.candidates[0].person_id, os.path.basename(image.name), person.candidates[0].confidence)) # Get topmost confidence score
    else:
        alertAdmin(sender, receiver,subject , file_location)
        print('No person identified for face ID {} in {}.'.format(person.face_id, os.path.basename(image.name)))