import pygame 
import sys

pygame.init()

size = width, height = 400, 400
screen = pygame.display.set_mode(size)

img = pygame.image.load("stickman.png")
screen.blit(img,(100,100))
pygame.display.flip()

points = []

while 1:
	pygame.event.get()
	if pygame.mouse.get_pressed()[0] == 1:
		pygame.event.wait()
		points.append(pygame.mouse.get_pos())
	if pygame.mouse.get_pressed()[2] == 1:
		pygame.event.wait()
		print("pygame.draw.polygon(screen,WHITE,"+str(points)+",2)")
		points = []	
	pass
