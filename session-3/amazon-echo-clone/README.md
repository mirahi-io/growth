1) AWS account
2) Amazon Developper Account
3) Register the device as an AVS -> https://developer.amazon.com/en-US/docs/alexa/alexa-voice-service/register-a-product-with-avs.html
4) Set up the raspberry-pi
5) Allow the SSH for easier access
6) Install the SDK on the Pi -> https://developer.amazon.com/en-US/docs/alexa/avs-device-sdk/raspberry-pi.html
7) Care when cmake the line -DPORTAUDIO_INCLUDE_DIR=/home/pi/sdk-folder/third-party/portaudio/include There is a missing \ 

