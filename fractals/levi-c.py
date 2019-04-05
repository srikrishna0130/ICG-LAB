import pygame
import math

pygame.init()
screen = pygame.display.set_mode([800, 600])
pygame.display.set_caption('Levi-c Fractal')


def levi_c(x,y,l,angle,n):

	if n==1:
		pygame.draw.line(screen,(255,255,255),(x,y),(x+l*math.cos(math.radians(angle)),y+l*math.sin(math.radians(angle))) )
		pygame.display.update()

	else:
		levi_c(x,y,l/math.sqrt(2),angle+45,n-1)
		levi_c(x+l*math.cos(math.radians(angle+45))/math.sqrt(2),y+l*math.sin(math.radians(angle+45))/math.sqrt(2),l/math.sqrt(2),angle-45,n-1)


l,angle,n = (float(x) for x in input('Enter l, angle, n\n').strip().split(' '))
levi_c(300,200,l,angle,n)
pygame.time.wait(5000)


