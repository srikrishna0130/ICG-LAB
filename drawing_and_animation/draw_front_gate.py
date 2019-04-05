import pygame 
import sys

pygame.init()

size = width, height = 1300, 720
screen = pygame.display.set_mode(size)
WHITE = [255,255,255]

#img = pygame.image.load("frontgate.jpeg")
#screen.blit(img,(100,100))

pygame.draw.polygon(screen,WHITE,[(154, 209), (154, 234), (1056, 230),(1056, 205)],True)
pygame.draw.polygon(screen,WHITE,[(573, 235), (617, 234), (617, 462), (572, 463)],True)
pygame.draw.polygon(screen,WHITE,[(207, 325), (205, 463), (326, 466), (327, 325)],True)
pygame.draw.polygon(screen,WHITE,[(327, 325), (389, 344), (385, 450), (328, 460)],True)
pygame.draw.polygon(screen,WHITE,[(870, 325), (996, 324), (998, 472), (872, 465)],True)
pygame.draw.polygon(screen,WHITE,[(871, 323), (868, 463), (813, 453), (810, 344)],True)

pygame.draw.polygon(screen,WHITE,[(279, 233), (328, 233), (326, 325), (274, 324)],True)
pygame.draw.polygon(screen,WHITE,[(327, 326), (332, 327), (334, 237), (329, 234)],True)
pygame.draw.polygon(screen,WHITE,[(870, 230), (923, 227), (925, 324), (871, 325)],True)
pygame.draw.polygon(screen,WHITE,[(871, 325), (866, 326), (863, 234), (870, 231)],True)

pygame.draw.polygon(screen,WHITE,[(155, 235), (251, 272)],True)
pygame.draw.polygon(screen,WHITE,[(251, 272), (276, 271)],True)
pygame.draw.polygon(screen,WHITE,[(335, 270), (573, 273)],True)
pygame.draw.polygon(screen,WHITE,[(619, 272), (865, 268)],True)
pygame.draw.polygon(screen,WHITE,[(926, 267), (940, 269)],True)
pygame.draw.polygon(screen,WHITE,[(940, 269), (1054, 230)],True)

pygame.draw.polygon(screen,WHITE,[(385, 271), (384, 342), (345, 330), (348, 272)],True)
pygame.draw.polygon(screen,WHITE,[(811, 269), (812, 342), (856, 328), (856, 270)],True)

pygame.draw.polygon(screen,WHITE,[(328, 390), (327, 458), (398, 457), (397, 391)],True)
pygame.draw.polygon(screen,WHITE,[(626, 389), (626, 464)],True)
pygame.draw.polygon(screen,WHITE,[(627, 458), (743, 460), (744, 392), (629, 390)],True)
pygame.draw.polygon(screen,WHITE,[(746, 391), (746, 460), (861, 460), (861, 392)],True)
pygame.draw.polygon(screen,WHITE,[(861, 392), (863, 463), (871, 464), (871, 392)],True)

#GATE GRILLS	
pygame.draw.polygon(screen,WHITE,[(331, 392), (351, 456)],True)
pygame.draw.polygon(screen,WHITE,[(351, 457), (371, 390)],True)
pygame.draw.polygon(screen,WHITE,[(384, 456), (397, 394)],True)
pygame.draw.polygon(screen,WHITE,[(396, 455), (372, 392)],True)
pygame.draw.polygon(screen,WHITE,[(350, 457), (333, 393)],True)
pygame.draw.polygon(screen,WHITE,[(384, 457), (354, 391)],True)
pygame.draw.polygon(screen,WHITE,[(354, 391), (329, 458)],True)

pygame.draw.polygon(screen,WHITE,[(558, 390), (567, 391), (567, 462), (559, 462)],True)
pygame.draw.polygon(screen,WHITE,[(561, 391), (532, 410), (533, 449), (562, 462)],True)
pygame.draw.polygon(screen,WHITE,[(532, 410), (547, 461)],True)
pygame.draw.polygon(screen,WHITE,[(547, 461), (560, 391)],True)
pygame.draw.polygon(screen,WHITE,[(562, 463), (543, 402)],True)
pygame.draw.polygon(screen,WHITE,[(543, 402), (534, 452)],True)

pygame.draw.polygon(screen,WHITE,[(627, 391), (656, 458)],True)
pygame.draw.polygon(screen,WHITE,[(656, 458), (686, 392)],True)
pygame.draw.polygon(screen,WHITE,[(686, 392), (715, 459)],True)
pygame.draw.polygon(screen,WHITE,[(715, 459), (744, 393)],True)
pygame.draw.polygon(screen,WHITE,[(744, 459), (720, 392)],True)
pygame.draw.polygon(screen,WHITE,[(720, 392), (686, 458)],True)
pygame.draw.polygon(screen,WHITE,[(686, 458), (663, 392)],True)
pygame.draw.polygon(screen,WHITE,[(663, 392), (631, 458)],True)

pygame.draw.polygon(screen,WHITE,[(748, 393), (776, 460)],True)
pygame.draw.polygon(screen,WHITE,[(776, 460), (804, 392)],True)
pygame.draw.polygon(screen,WHITE,[(804, 392), (838, 459)],True)
pygame.draw.polygon(screen,WHITE,[(838, 459), (864, 393)],True)
pygame.draw.polygon(screen,WHITE,[(863, 461), (834, 392)],True)
pygame.draw.polygon(screen,WHITE,[(809, 460), (834, 393)],True)
pygame.draw.polygon(screen,WHITE,[(807, 460), (775, 393)],True)
pygame.draw.polygon(screen,WHITE,[(775, 392), (746, 460)],True)

pygame.draw.polygon(screen,WHITE,[(326, 461), (0, 595)],True)
pygame.draw.polygon(screen,WHITE,[(871, 463), (1246, 574)],True)

pygame.draw.polygon(screen,WHITE,[(205, 465), (3, 529)],True)
pygame.draw.polygon(screen,WHITE,[(999, 471), (1204, 511)],True)

pygame.draw.polygon(screen,WHITE,[(530, 216), (530, 217), (530, 218), (530, 220), (529, 221), (529, 222), (529, 223), (529, 224), (529, 225), (529, 226), (529, 225), (529, 224), (529, 223), (529, 222), (529, 221), (529, 220), (529, 219), (529, 218), (529, 217), (529, 216), (529, 215), (529, 214), (528, 214), (528, 213), (528, 213)],True)
pygame.draw.polygon(screen,WHITE,[(539, 212), (539, 213), (539, 214), (539, 215), (539, 216), (539, 217), (539, 218), (539, 219), (539, 220), (539, 221), (540, 221), (540, 223), (540, 224), (540, 225), (540, 226), (541, 226), (541, 227), (541, 226), (541, 225), (541, 224), (541, 223), (541, 222), (541, 221), (541, 220), (541, 218), (541, 217), (541, 216), (541, 215), (541, 214), (540, 214), (540, 213), (540, 212), (539, 212), (539, 212)],True)
pygame.draw.polygon(screen,WHITE,[(546, 214), (546, 215), (546, 216), (546, 217), (546, 218), (546, 219), (547, 219), (547, 220), (547, 221), (547, 222), (547, 221), (547, 220), (547, 219), (547, 218), (547, 217), (547, 216), (547, 215), (547, 214), (547, 213), (547, 212), (547, 212)],True)
pygame.draw.polygon(screen,WHITE,[(558, 212), (559, 213), (560, 213), (561, 213), (562, 213), (563, 213), (564, 213), (565, 213), (566, 213), (567, 213), (568, 213), (569, 213), (570, 213), (571, 213), (572, 213), (572, 213)],True)
pygame.draw.polygon(screen,WHITE,[(565, 215), (565, 216), (565, 217), (565, 218), (565, 219), (565, 220), (565, 221), (565, 222), (565, 223), (565, 223)],True)
pygame.draw.polygon(screen,WHITE,[(584, 213), (584, 214), (584, 215), (584, 216), (584, 217), (584, 218), (584, 219), (584, 220), (584, 221), (584, 222), (584, 223), (584, 224), (584, 225), (584, 225)],True)
pygame.draw.polygon(screen,WHITE,[(584, 213), (585, 213), (586, 213), (587, 213), (588, 213), (589, 213), (590, 213), (591, 213), (591, 214), (593, 214), (593, 215), (594, 216), (594, 217), (594, 218), (594, 219), (593, 220), (593, 221), (592, 221), (592, 222), (591, 222), (591, 223), (590, 223), (590, 224), (589, 224), (588, 224), (587, 224), (586, 224), (585, 224), (584, 224), (583, 224), (582, 224), (582, 225), (581, 225), (580, 225), (580, 225)],True)
pygame.draw.polygon(screen,WHITE,[(601, 224), (601, 223), (601, 222), (601, 221), (601, 220), (601, 219), (602, 219), (602, 218), (602, 217), (602, 216), (602, 215), (602, 214), (602, 213), (602, 213)],True)
pygame.draw.polygon(screen,WHITE,[(602, 214), (603, 214), (604, 214), (604, 215), (605, 215), (605, 216), (606, 216), (607, 216), (607, 217), (608, 217), (608, 218), (608, 218)],True)
pygame.draw.polygon(screen,WHITE,[(609, 218), (609, 217), (609, 216), (609, 215), (610, 215), (611, 215), (611, 214), (612, 214), (613, 214), (613, 213), (614, 213), (614, 213)],True)
pygame.draw.polygon(screen,WHITE,[(614, 214), (614, 215), (614, 216), (614, 217), (614, 218), (614, 219), (614, 220), (614, 221), (614, 222), (614, 223), (614, 223)],True)

pygame.display.flip()

while 1:
	pass


