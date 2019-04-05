//DDA straight line algorithm

#include<stdio.h>
#include<stdlib.h>
#include<graphics.h>
#include<math.h>

void drawLine(int x1,int y1,int x2,int y2);

int main()
{
    //XInitThreads();
    int x1,y1,x2,y2;
    printf("Enter x1,y1 x2,y2\n");
    scanf("%d,%d %d,%d",&x1,&y1,&x2,&y2);

    int gd = DETECT, gm;
    initgraph(&gd, &gm, NULL);

    putpixel(x1,y1,RED);
    putpixel(x2,y2,RED);

    drawLine(x1,y1,x2,y2);

    delay(500000);
    closegraph();
    return 0;
}

void drawLine(int x1,int y1,int x2,int y2)
{

    float m = (y2-y1)*1.0/(x2-x1);
    float x=x1,y=y1;
    //printf("m=%f\n",m);
    
    int i = (x2-x1)/abs(x2-x1);
    int j = (y2-y1)/abs(y2-y1);
    int s = i*j;                    //sign of the slope

    if (abs(x2-x1)>=abs(y2-y1))     //case 1
        {

            for(;(x!=x2 && y!=y2);x=x+i)
            {
                putpixel((int)round(x),(int)round(y),GREEN);
                y=y+j*s*m;                                      //weather y should incr or decr
             }
        }             
    else                            //case 2
        {
            for(;(y!=y2 && x!=x2);y=y+j)
            {
                putpixel((int)round(x),(int)round(y),GREEN);
                x=x+i*s*1/m;                                    //weather x should incr or decr
            }                
        }        

}
