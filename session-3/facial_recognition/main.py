from email_sender import *
from capture_image import *

sender = ' '
receiver = ' '
subject = 'Mirahi growth test email '
file_location = 'session-3/facial_recognition/resources/target.jpg'


captureImageTarget()
alertAdmin(sender, receiver,subject , file_location)
