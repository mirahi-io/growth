#!/usr/bin/python

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import os.path

_user = '8shield.net'
_password = 'cG1sZThlNjhrbTAw'

def alertAdmin(sender, receiver,subject , file_location):

    sender =  sender
    receiver = receiver
    subject = subject
    file_location = file_location
    

    msg = MIMEMultipart()
    msg['Subject'] = subject
    msg['From'] = sender
    msg['To'] = receiver
    


    filename = os.path.basename(file_location)
    attachment = open(file_location, "rb")
    part = MIMEBase('application', 'octet-stream')
    part.set_payload(attachment.read())
    encoders.encode_base64(part)
    part.add_header('Content-Disposition', "attachment; filename= %s" % filename)


    msg.attach(part)

    server = smtplib.SMTP('mail.smtp2go.com', 2525)
    server.starttls()
    server.login(_user, _password)
    text = msg.as_string()
    server.sendmail(sender, receiver, text)
    server.quit()
    print('email send')

