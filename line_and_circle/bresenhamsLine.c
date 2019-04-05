//Bresenhams straight line algorithm

#include<stdio.h>
#include<stdlib.h>
#include<graphics.h>
#include<math.h>

int Flag =0;

void drawLine(int x1,int y1,int x2,int y2);

int main()
{
    int x1,y1,x2,y2;
    printf("Enter x1,y1 x2,y2\n");
    scanf("%d,%d %d,%d",&x1,&y1,&x2,&y2);

    int gd = DETECT, gm;
    initgraph(&gd, &gm, NULL);

    putpixel(x1,y1,WHITE);
    putpixel(x2,y2,WHITE);

    drawLine(x1,y1,x2,y2);

    //delay(500000);
    getch();
    closegraph();
    return 0;
}

void drawLine(int x1,int y1,int x2,int y2)
{
     int dx = abs(x2-x1);
     int dy = abs(y2-y1);
     int dy_2 = 2*dy;       //2*dy
     int dx_2 = 2*dx;       //2*dx
     int d = dy_2 - dx_2;

     int s = dx/abs(dx) * dy/abs(dy);
     int X = (x2-x1)/abs(dx),Y = (y2-y1)/abs(dy);
     
     //int *p = malloc(sizeof(int)*(dx+1));
     int p = dy_2 - dx;
     int x=x1,y=y1;


     if (dx >= dy)            //case 1
     {

	    if(x1>x2)
	    {
	     	x=x2;
	     	y=y2;
	     	X = -X;
	     	Y = -Y;
	    }
        
        for(int i=1;i<=dx;++i)
        {
            if (p<0)
                p=p + dy_2;
            else
            {
                p = p+d;
                y = y+Y;
            }
                
            if(Flag)
            	putpixel(y,x+i,GREEN);
            else
            	putpixel(x+i,y,GREEN);
        }            
     	
     }

    else						//case 2 , points are inverted and line is generated and 
    {      						//the pixels are plotted in a inverted fashion.
     	Flag = 1;
     	drawLine(y1,x1,y2,x2);
    }

}
