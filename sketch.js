var b1 ;
var tri ;
var  c,c1,c2 ,c3,c4,c5,c6,c7,c8,c9,c10,c11,c12,c13,c14,c15,c16,c17,c18,c19,c20;
var cl1,cl2 ,cl3,cl4,cl5,cl6,cl7,cl8,cl9,cl10,cl11,cl12,cl13,cl14,cl15;
var cd1,cd2 ,cd3,cd4,cd5,cd6,cd7,cd8,cd9,cd10,cd11,cd12,cd13,cd14,cd15,cd16,cd17,cd18,cd19,cd20,cd21,cd22,cd23,cd24,cd25;
var knife ;
function setup(){
createCanvas(700,700);
b1 = new Box (100,100,500,300);
ellipseMode(CENTER);
knife = createSprite(337,142 , 20,20);
knife.shapeColor="green";
c  =  createSprite(347  ,145 ,10,10);
c1 =  createSprite(357 , 155 , 10,10);
c2 =  createSprite(367 , 165, 10,10);
c3 =  createSprite(377 , 175 , 10,10);
c4 =  createSprite(387 , 185 , 10,10);
c5 =  createSprite(397 , 195 , 10,10);
c6 =  createSprite(407 , 205 , 10,10);
c7 =  createSprite(417 , 215, 10,10);
c8 =  createSprite(427 , 225 , 10,10);
c9 =  createSprite(437 , 235 , 10,10);
c10 =  createSprite(447 , 245, 10,10);
c11 =  createSprite(457 , 255, 10,10);
c12 =  createSprite(467 , 265 , 10,10);
c13 =  createSprite(477 , 275, 10,10);
c14 =  createSprite(487 , 285 , 10,10);
// c15 =  createSprite(497 , 310,10 , 10,10);


cl1 =  createSprite(330 , 159 , 10,10);
cl2 =  createSprite(320 , 169, 10,10);
cl3 =  createSprite(310 , 179 , 10,10);
cl4 =  createSprite(300 , 187 , 10,10);
cl5 =  createSprite(290 , 197 , 10,10);
cl6 =  createSprite(280 , 207 , 10,10);
cl7 =  createSprite(270 , 217 , 10,10);
cl8 =  createSprite(260 , 227 , 10,10);
cl9 =  createSprite(250 , 237 , 10,10);
cl10 =  createSprite(240 , 247 , 10,10);
cl11 =  createSprite(230 , 257 , 10,10);
cl12 =  createSprite(220 , 267 , 10,10);
cl13 =  createSprite(210 , 275 , 10,10);
cl14 =  createSprite(200 , 285 , 10,10);
cl15 =  createSprite(190 , 295 , 10,10);


cd1 =  createSprite(190 , 305 , 10,10);
cd2 =  createSprite(205 , 305 , 10,10);
cd3 =  createSprite(220 , 305 , 10,10);
cd4 =  createSprite(235 , 305 , 10,10);
cd5 =  createSprite(250 , 305 , 10,10);
cd6 =  createSprite(265 , 305 , 10,10);
cd7 =  createSprite(280 , 305 , 10,10);
cd8 =  createSprite(295 , 305 , 10,10);
cd9 =  createSprite(305 , 305 , 10,10);
cd10 =  createSprite(320 , 305 , 10,10);
cd11 =  createSprite(335 , 305 , 10,10);
cd12 =  createSprite(350 , 305 , 10,10);
cd13 =  createSprite(365 , 305 , 10,10);
cd14 =  createSprite(380 , 305 , 10,10);
cd15 =  createSprite(395 , 305 , 10,10);
cd16 =  createSprite(405 , 305 , 10,10);
cd17=  createSprite(420 , 305 , 10,10);
cd18 =  createSprite(435 , 305 , 10,10);
cd19 =  createSprite(450 , 305 , 10,10);
cd20 =  createSprite(465 , 305 , 10,10);
cd21 =  createSprite(480 , 305 , 10,10);
cd22 =  createSprite(495 , 305 , 10,10);

}
function preLoad() {
    
}
function draw() {
    background("pink");
    b1.display();
    fill("red");
   triangle(350,150,500,300,190,300);
   fill(0);
  knife.x = mouseX;
  knife.y = mouseY;
  
  if (c.isTouching(knife)) {
    c.remove();
  }
  if (c1.isTouching(knife)) {
    c1.remove();
  }

  if (c2.isTouching(knife)) {
    c2.remove();
  }

  if (c3.isTouching(knife)) {
    c3.remove();
  }
  if (c4.isTouching(knife)) {
    c4.remove();
  }
  if (c5.isTouching(knife)) {
    c5.remove();
  }
  if (c6.isTouching(knife)) {
    c6.remove();
  }
  if (c7.isTouching(knife)) {
    c7.remove();
  }
  if (c8.isTouching(knife)) {
    c8.remove();
  }
  if (c9.isTouching(knife)) {
    c9.remove();
  }
  if (c10.isTouching(knife)) {
    c10.remove();
  }
  if (c11.isTouching(knife)) {
    c11.remove();
  }
  if (c12.isTouching(knife)) {
    c12.remove();
  }
  if (c13.isTouching(knife)) {
    c13.remove();
  }
  if (c14.isTouching(knife)) {
    c14.remove();
  }

  // moving forward for leftside 
  if (cl1.isTouching(knife)) {
    cl1.remove();
  }

  if (cl2.isTouching(knife)) {
    cl2.remove();
  }

  if (cl3.isTouching(knife)) {
    cl3.remove();
  }
  if (cl4.isTouching(knife)) {
    cl4.remove();
  }
  if (cl5.isTouching(knife)) {
    cl5.remove();
  }
  if (cl6.isTouching(knife)) {
    cl6.remove();
  }
  if (cl7.isTouching(knife)) {
    cl7.remove();
  }
  if (cl8.isTouching(knife)) {
    cl8.remove();
  }
  if (cl9.isTouching(knife)) {
    cl9.remove();
  }
  if (cl10.isTouching(knife)) {
    cl10.remove();
  }
  if (cl11.isTouching(knife)) {
    cl11.remove();
  }
  if (cl12.isTouching(knife)) {
    cl12.remove();
  }
  if (cl13.isTouching(knife)) {
    cl13.remove();
  }
  if (cl14.isTouching(knife)) {
    cl14.remove();
  }
  if (cl15.isTouching(knife)) {
    cl15.remove();
  }
  
  //moving forward for boxes down 

  if (cd1.isTouching(knife)) {
    cd1.remove();
  }

  if (cd2.isTouching(knife)) {
    cd2.remove();
  }

  if (cd3.isTouching(knife)) {
    cd3.remove();
  }
  if (cd4.isTouching(knife)) {
    cd4.remove();
  }
  if (cd5.isTouching(knife)) {
    cd5.remove();
  }
  if (cd6.isTouching(knife)) {
    cd6.remove();
  }
  if (cd7.isTouching(knife)) {
    cd7.remove();
  }
  if (cd8.isTouching(knife)) {
    cd8.remove();
  }
  if (cd9.isTouching(knife)) {
    cd9.remove();
  }
  if (cd10.isTouching(knife)) {
    cd10.remove();
  }
  if (cd11.isTouching(knife)) {
    cd11.remove();
  }
  if (cd12.isTouching(knife)) {
    cd12.remove();
  }
  if (cd13.isTouching(knife)) {
    cd13.remove();
  }
  if (cd14.isTouching(knife)) {
    cd14.remove();
  }
  if (cd15.isTouching(knife)) {
    cd15.remove();
  }
  if (cd16.isTouching(knife)) {
    cd16.remove();
  }
  if (cd17.isTouching(knife)) {
    cd17.remove();
  }
  if (cd18.isTouching(knife)) {
    cd18.remove();
  }
  if (cd19.isTouching(knife)) {
    cd19.remove();
  }
  if (cd20.isTouching(knife)) {
    cd20.remove();
  }
  if (cd21.isTouching(knife)) {
    cd21.remove();
  }
  if (cd22.isTouching(knife)) {
    cd22.remove();
  }
  
      drawSprites();
    
}

