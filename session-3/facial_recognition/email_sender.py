#!/usr/bin/python

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from email.mime.base import MIMEBase
from email import encoders
import os.path

sender = 'smtp2go.o530o@8shield.net'
receiver = 'sam@mirahi.io'
subject = 'Mirahi growth test email '
file_location = 'session-3/facial_recognition/resources/out.mpeg'
user = '8shield.net'
password = 'cG1sZThlNjhrbTAw'

msg = MIMEMultipart()
msg['Subject'] = subject
msg['From'] = sender
msg['To'] = receiver
msg['Subject'] = subject


filename = os.path.basename(file_location)
attachment = open(file_location, "rb")
part = MIMEBase('application', 'octet-stream')
part.set_payload(attachment.read())
encoders.encode_base64(part)
part.add_header('Content-Disposition', "attachment; filename= %s" % filename)


msg.attach(part)

server = smtplib.SMTP('mail.smtp2go.com', 2525)
server.starttls()
server.login(user, password)
text = msg.as_string()
server.sendmail(sender, receiver, text)
server.quit()

