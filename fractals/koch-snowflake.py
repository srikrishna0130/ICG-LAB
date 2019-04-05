import pygame
import math
import numpy as np

pygame.init()
clock = pygame.time.Clock()
screen = pygame.display.set_mode([800, 600])
pygame.display.set_caption('KOch - snowflake')

x,y = [300,200]
l = 300
w = [255,255,255]
b = [0,0,0]

# def drawSnowflake():

# 		pygame.draw.line(screen,w,[x,y],[x+l,y])
# 		pygame.draw.line(screen,w,[x,y],[x+l*math.cos(math.radians(60)),y+l*math.sin(math.radians(60))])
# 		pygame.draw.line(screen,w,[x+l,y],[x+l*math.cos(math.radians(60)),y+l*math.sin(math.radians(60))])
# 		pygame.display.update()


def koch_snowflake(X,l,angle,n):

	z = [l*math.cos(math.radians(angle))/3,l*math.sin(math.radians(angle))/3]
	t = [l*math.cos(math.radians(angle+60))/3,l*math.sin(math.radians(angle+60))/3]
	
	if(n==1):
		pygame.draw.line(screen,w,X,[X[0]+z[0],X[1]+z[1]],1)
		pygame.draw.line(screen,b,[X[0]+z[0],X[1]+z[1]],[X[0]+2*z[0],X[1]+2*z[1]],1)
		pygame.draw.line(screen,w,[X[0]+2*z[0],X[1]+2*z[1]],[X[0]+3*z[0],X[1]+3*z[1]],1)
		
		pygame.draw.line(screen,w,[X[0]+z[0],X[1]+z[1]],[X[0]+z[0]+t[0],X[1]+z[1]+t[1]],1)
		pygame.draw.line(screen,w,[X[0]+2*z[0],X[1]+2*z[1]],[X[0]+z[0]+t[0],X[1]+z[1]+t[1]],1)

		pygame.display.update()
	
	else:	
		l=l/3
		koch_snowflake(X,l,angle,n-1)
		koch_snowflake([X[0]+z[0],X[1]+z[1]],l,angle+60,n-1)
		koch_snowflake([X[0]+z[0]+t[0],X[1]+z[1]+t[1]],l,angle-60,n-1)
		koch_snowflake([X[0]+2*z[0],X[1]+2*z[1]],l,angle,n-1)


n = eval(input("Enter the no of iterations:\n"))

#drawSnowflake()

koch_snowflake([x,y],l,60,n)
koch_snowflake([x+l*math.cos(math.radians(60)),y+l*math.sin(math.radians(60))],l,-60,n)
koch_snowflake([x+l,y],l,180,n)
pygame.time.wait(5000)
