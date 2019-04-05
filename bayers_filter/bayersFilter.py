import cv2 as cv  # Not actually necessary if you just want to create an image.
import numpy as np
from random import randint

SIZE = 100

image1 = np.zeros((SIZE,SIZE,3), np.uint8)
image2 = np.zeros((SIZE,SIZE,3), np.uint8)

image1[:] = (0,0,0)      # (B, G, R)
image2[:] = (0,0,0)      # (B, G, R)

for i in range(0,SIZE):
    for j in range(0,SIZE):
        if i%2==0:
            if j%2==0 :
                image1[i][j]= (0,0,randint(0,255))
            else:
                image1[i][j]= (0,randint(0,255),0)  

        else:
            if j%2==0 :
                image1[i][j]= (0,randint(0,255),0)
            else:
                image1[i][j]= (randint(0,255),0,0)  


##Bayer' filter

for i in range(1,SIZE-1):
    for j in range(1,SIZE-1):
        
        if i%2==0:
            if j%2==0 :
                RED = image1[i][j];
                BLUE = (image1[i+1][j+1] + image1[i+1][j-1] + image1[i-1][j+1] + image1[i-1][j-1])/4
                GREEN = (image1[i+1][j] + image1[i][j-1] + image1[i][j+1] + image1[i-1][j])/4
                image2[i][j] = BLUE + GREEN + RED
            else:       
                BLUE = (image1[i+1][j] + image1[i-1][j])/2;
                GREEN = (image1[i+1][j+1] + image1[i+1][j-1] + image1[i-1][j+1] + image1[i-1][j-1] + image1[i][j])/5
                RED = (image1[i][j-1] + image1[i][j+1])/2
                image2[i][j] = BLUE + GREEN + RED
        else:
            if j%2==0 :
                RED = (image1[i+1][j] + image1[i-1][j])/2;
                GREEN = (image1[i+1][j+1] + image1[i+1][j-1] + image1[i-1][j+1] + image1[i-1][j-1] + image1[i][j])/5
                BLUE = (image1[i][j-1] + image1[i][j+1])/2
                image2[i][j] = BLUE + GREEN + RED
            else:       
                GREEN = image1[i][j];
                RED = (image1[i+1][j+1] + image1[i+1][j-1] + image1[i-1][j+1] + image1[i-1][j-1])/4
                BLUE = (image1[i+1][j] + image1[i][j-1] + image1[i][j+1] + image1[i-1][j])/4
                image2[i][j] = BLUE + GREEN + RED             

f1 = open("orig.txt","w+")
f2 = open("modif.txt","w+")

for i in range(0,SIZE):
	for j in range(0,SIZE):
		f1.write(str(image1[i][j]) + "\n")
		f2.write(str(image2[i][j]) + "\n")

f1.close()
f2.close()

cv.imshow('image1',image1)
cv.imshow('image2',image2)

cv.waitKey(0)