var turn=0
function setup() {
    createCanvas(innerWidth,innerHeight); 
    background("yellow");
    fill("#404040");
    rect(0, 0, width, 50);
    textAlign(CENTER);
    fill("White");
    textSize(18);
    text("TIC TAC TOE", width / 2, 33);
    fill("Black");
}

function draw()
{
 createRow(150)
 createRow(250)
 createRow(350)  
}

function createRow(y)
{
  for (x = 150; x < 450; x=x+100)
   {
       var b1= new Box(x, y, 100, 100); 
       b1.appear();   
   }  
}