from turtle import *
from math import *



L = 100
sq = L*sqrt(2) 



home()

speed(1)

penup()
setx(0)
sety(-50)
pendown()

circle(L)

left(45)
forward(sq)
left(90)
forward(sq)
left(90)
forward(sq)
left(90)
forward(sq)

left(90)
forward(sq/2)
circle(sq/2)

left(60)
forward(sq*sqrt(3)/2)
left(120)
forward(sq*sqrt(3)/2)
left(120)
forward(sq*sqrt(3)/2)


