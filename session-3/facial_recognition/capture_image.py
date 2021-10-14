from cv2 import *
# initialize the camera
def captureImageTarget():
    cam = VideoCapture(0)   # 0 -> index of camera
    s, img = cam.read()
    if s:    # frame captured without any errors
        namedWindow("cam-test", WINDOW_AUTOSIZE)
        imshow("cam-test",img)
        destroyWindow("cam-test")
        imwrite("session-3/facial_recognition/resources/target.jpg",img)
        return img