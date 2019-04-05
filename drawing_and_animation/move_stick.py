import sys
import pygame


#-----------------------------------------------------------

def movepart(arr,point,speed,n):
	for p in range(n) :
		for i in arr:
			pygame.draw.polygon(screen,WHITE,[i, point],2)
			pygame.display.flip()   
			for x in range(1,speed):
				pass
			pygame.draw.polygon(screen,BLACK,[i, point],2)
			#pygame.display.flip()   


		for i in arr[::-1]:
			pygame.draw.polygon(screen,WHITE,[i, point],2)
			pygame.display.flip()
			for x in range(1,speed):
				pass
			pygame.draw.polygon(screen,BLACK,[i, point],2)
			#pygame.display.flip()

	pygame.draw.polygon(screen,WHITE,[arr[0], point],2)		
	pygame.display.flip()

def movejoint(arr,p1,p2,speed,n):
	for p in range(n) :
		for i in arr:
			pygame.draw.polygon(screen,WHITE,[i, p1],2)
			pygame.draw.polygon(screen,WHITE,[i, p2],2)
			pygame.display.flip()   
			for x in range(1,speed):
				pass
			pygame.draw.polygon(screen,BLACK,[i, p1],2)
			pygame.draw.polygon(screen,BLACK,[i, p2],2)
			#pygame.display.flip()   


		for i in arr[::-1]:
			pygame.draw.polygon(screen,WHITE,[i, p1],2)
			pygame.draw.polygon(screen,WHITE,[i, p2],2)
			pygame.display.flip()
			for x in range(1,speed):
				pass
			pygame.draw.polygon(screen,BLACK,[i, p1],2)
			pygame.draw.polygon(screen,BLACK,[i, p2],2)
			#pygame.display.flip()

	pygame.draw.polygon(screen,WHITE,[arr[0], p1],2)		
	pygame.draw.polygon(screen,WHITE,[arr[0], p2],2)		
	pygame.display.flip()

#--------------------------------------------------------------

pygame.init()

size = width, height = 400, 400
screen = pygame.display.set_mode(size)
WHITE = [255,255,255]
BLACK = [0,0,0]


pygame.draw.circle(screen,WHITE,(146, 119),22,2)				#head
pygame.draw.polygon(screen,WHITE,[(139, 147), (134, 232)],2)	#body
pygame.draw.polygon(screen,WHITE,[(140, 145), (153, 186)],2)	#arm 1
pygame.draw.polygon(screen,WHITE,[(181, 216), (153, 186)],2)	#arm 11
pygame.draw.polygon(screen,WHITE,[(141, 147), (114, 178)],2)	#arm 2
pygame.draw.polygon(screen,WHITE,[(129, 219), (114, 178)],2)	#arm 22
pygame.draw.polygon(screen,WHITE,[(134, 232), (126, 270)],2)	#leg 1
pygame.draw.polygon(screen,WHITE,[(101, 307), (126, 270)],2)	#leg 11
pygame.draw.polygon(screen,WHITE,[(134, 232), (161, 259)],2)	#leg 2
pygame.draw.polygon(screen,WHITE,[(181, 298), (161, 259)],2)	#leg 22

hand = [(181, 216), (182, 216), (182, 215), (183, 214), (184, 214), (184, 213), (185, 213), (186, 212), (187, 212), (188, 211), (188, 210), (189, 210), (189, 209), (190, 209), (190, 208), (190, 207), (191, 207), (192, 206), (192, 205), (193, 205), (193, 204), (194, 204), (194, 203), (195, 203), (195, 202), (195, 201), (196, 201), (196, 200), (197, 199), (197, 198), (197, 197), (197, 196), (198, 195), (198, 194), (199, 194), (199, 193), (199, 192) ]
hand2 = [(129, 219), (128, 219), (127, 219), (126, 219), (126, 220), (125, 220), (125, 221), (124, 221), (123, 221), (122, 221), (121, 221), (120, 222), (119, 222), (118, 222), (117, 222), (116, 223), (115, 223), (114, 223), (113, 223), (112, 223), (111, 223), (109, 224), (108, 224), (107, 224), (106, 224), (104, 224), (103, 224), (102, 224), (101, 224), (100, 224), (99, 224), (98, 224), (97, 224), (98, 224), (98, 224)]

leg = [(101, 307), (104, 307), (105, 307), (106, 307), (107, 306), (108, 306), (109, 306), (109, 305), (110, 305), (111, 305), (111, 304), (112, 304), (112, 303), (113, 303), (114, 303), (114, 302), (114, 301), (115, 301), (116, 301), (117, 301), (118, 301), (119, 300), (120, 300), (121, 300), (122, 300), (123, 300), (124, 300), (125, 300), (126, 300), (127, 301), (128, 301), (129, 301), (129, 301)]
leg2 = [(181, 298), (180, 298), (180, 299), (179, 299), (177, 299), (177, 300), (176, 300), (176, 301), (175, 301), (174, 302), (173, 302), (172, 302), (172, 303), (171, 304), (170, 304), (169, 304), (168, 304), (167, 304), (166, 304), (165, 304), (164, 304), (163, 304), (162, 304), (161, 304), (160, 304), (160, 303), (160, 303)]

joint = [(126, 270), (126, 270), (125, 270), (125, 269), (124, 269), (124, 268), (123, 268), (122, 268), (122, 267), (121, 266), (120, 266), (119, 265), (118, 265), (117, 264), (116, 264), (115, 264), (115, 263), (113, 263), (113, 262), (112, 262), (113, 262), (113, 263), (113, 263)]
joint2 =[(161, 259), (160, 261), (160, 262), (160, 263), (159, 263), (158, 263), (158, 264), (157, 264), (157, 265), (157, 266), (156, 266), (156, 267), (155, 267), (154, 267), (153, 267), (152, 267), (152, 267)]

speed = 300000

movepart(hand,(153, 186),speed,2)
movepart(hand2,(114,178),speed,2)
movepart(leg,(126,270),speed,2)
movepart(leg2,(161,259),speed,2)

movejoint(joint,(101, 307),(134, 232),speed,2)
movejoint(joint2,(181, 298),(134, 232),speed,2)


