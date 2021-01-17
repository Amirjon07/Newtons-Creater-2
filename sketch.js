
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Mouse=Matter.Mouse;
const Constraint=Matter.Constraint;
const MouseConstraint=Matter.MouseConstraint
function setup() {
	createCanvas(windowWidth/2, windowHeight/1.5);


	engine = Engine.create();
	world = engine.world;
let canvasMouse=Mouse.create(canvas.elt)
canvasMouse.pixelRatio=pixelDensity()
let options={
	mouse:canvasMouse
}
mConstraint=MouseConstraint.create(engine,options)
World.add(world,mConstraint)
p1=new Pendulom(340,450,"Green")
p2=new Pendulom(400,450,"Blue")
p3=new Pendulom(460,450,"Red")
p4=new Pendulom(520,450,"Yellow")
p5=new Pendulom(580,450,"Purple")
s1=new Sling(p1.body,{
	x:340,y:200
})
s2=new Sling(p2.body,{
	x:400,y:200
})
s3=new Sling(p3.body,{
	x:460,y:200
})
s4=new Sling(p4.body,{
	x:520,y:200
})
s5=new Sling(p5.body,{
	x:580,y:200
})


	//Create the Bodies Here.
/*roof=new Roof(width/2,height/4,width/7,20)
BallDiameter=40
ball1=new Ball(width/2-BallDiameter*2,height/4+500,BallDiameter)
ball2=new Ball(width/2-BallDiameter*1,height/4+500,BallDiameter)
ball3=new Ball(width/2-BallDiameter*0,height/4+500,BallDiameter)
ball4=new Ball(width/2+BallDiameter*1,height/4+500,BallDiameter)
ball5=new Ball(width/2+BallDiameter*2,height/4+500,BallDiameter)
string1=new Rope(ball1.body,roof.body,-BallDiameter*2,0)
string2=new Rope(ball2.body,roof.body,-BallDiameter*1,0)
string3=new Rope(ball3.body,roof.body,-BallDiameter*0,0)
string4=new Rope(ball4.body,roof.body,+BallDiameter*1,0)
string5=new Rope(ball5.body,roof.body,+BallDiameter*2,0)*/  

}


function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine);
  p1.display()
  p2.display()
  p3.display()
  p4.display()
  p5.display()
  s1.display()
  s2.display()
  s3.display()
  s4.display()
  s5.display()

  /*ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  string1.display()
  string2.display()
  string3.display()
  string4.display()
  string5.display()
  roof.display()*/

}
/*function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:50,y:-45})
	}
}*/
/*function DrawLine(constraint){
	ballBodyPos=constraint.bodyA.position
	RoofBodyPos=constraint.bodyB.position
	roofbodyoffset=constraint.pointB
	roofbodyX=RoofBodyPos.x+roofbodyoffset.x
	roofbodyY=RoofBodyPos.y+roofbodyoffset.y
	line(ballBodyPosition.x,ballBodyPosition.y,roofbodyX.roofbodyY)

}*/
function mouseDragged(){
	Matter.Body.setPosition(p1.body,{
		x:mouseX,y:mouseY
	})

}
