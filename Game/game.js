let ball_x, ball_y, ball_dx, ball_dy, ball_radius;
let paddle_x, paddle_y, paddle_width, paddle_height, paddle_dx;
function setup() {
  createCanvas(400, 400);
  
  background("black")
  fill("white");
  ball_x = width/2;
  ball_y= height/2;
  ball_dx = 0;
  ball_dy = 1;
  ball_radius = 15;
  paddle_x = width/2-45;
  paddle_y = height-20;
  paddle_width = 90;
  paddle_height = 20;
}

function draw(){
  background("black");
  circle(ball_x,ball_y,ball_radius*2);
  rect(paddle_x, paddle_y,paddle_width, paddle_height);
  ball_x = ball_x+ball_dx;
  ball_y += ball_dy;
  
  let y=20
  for(let i=0;i<4;i++)
    {
      rect(i*100+20,y,60,20);
    }
  y+=40
  for(let i=0;i<4;i++)
    {
      rect(i*100+20,y,60,20);
    }
  y+=40;
  for(let i=0;i<4;i++)
    {
      rect(i*100+20,y,60,20);
    }
  y+=40;
  for(let i=0;i<4;i++)
    {
      rect(i*100+20,y,60,20);
    }
  
  if(ball_x >= width-ball_radius)
    {
      ball_dx = -ball_dx;
    }
  if(ball_x<ball_radius)
    {
      ball_dx = -ball_dx;
    }
  if(ball_y >= height-ball_radius)
    {
      // ball_x = width/2;
      // ball_y = height-ball_radius;
      ball_dx=0;
      ball_dy=0;
    }
  if(ball_y<ball_radius)
    {
      ball_dy=-ball_dy;
    }
  if(keyIsDown(LEFT_ARROW) && paddle_x>0)
    {
      paddle_x-=2;
    }
  if(keyIsDown(RIGHT_ARROW) && paddle_x+paddle_width<width)
    {
      paddle_x+=2;
    }
  if(ball_y-paddle_y==-15 && Math.abs(ball_x-paddle_x)>=0 && Math.abs(paddle_x-ball_x)<=90)
    {
      ball_dy = -ball_dy;
    }
}

function keyPressed()
{
  // if(keyCode == )
}