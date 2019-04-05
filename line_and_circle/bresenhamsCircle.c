//Bresenhams circle algorithm

#include<stdio.h>
#include<stdlib.h>
#include<graphics.h>
#include<math.h>

void drawCircle(int x,int y,int r);

int main()
{
    //XInitThreads();
    int x,y,r;
    printf("Enter x,y,r\n");
    scanf("%d,%d,%d",&x,&y,&r);

    int gd = DETECT, gm;
    initgraph(&gd, &gm, NULL);

    putpixel(x,y,WHITE);
    drawCircle(x,y,r);

    delay(500000);
    closegraph();
    return 0;
}

void drawCircle(int x,int y,int r)
{
    int x1=0,y1=r;
    int p = 1-r;

    //printf("%d\n",y1);

    for (; x1 <= y1 ;)
    {
        putpixel(x+x1,y+y1,GREEN);
        putpixel(x-x1,y+y1,GREEN);
        putpixel(x+x1,y-y1,GREEN);
        putpixel(x-x1,y-y1,GREEN);
        putpixel(x+y1,y+x1,GREEN);
        putpixel(x-y1,y+x1,GREEN);
        putpixel(x+y1,y-x1,GREEN);
        putpixel(x-y1,y-x1,GREEN);

        x1=x1+1;
        if(p<0)
            p = p + 2*x1+1;
        else
        {
            y1=y1-1;
            p = p + 2*x1+1 - 2*y1;
        }
        //printf("%d %d\n",x1,y1);

    }

}
