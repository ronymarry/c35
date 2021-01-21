// var dog, happyDog, database, foodS, foodStock;
// function preload()
// {
//   d1=loadImage("images/dogImg.png");
//   dogHappy=loadImage("images/dogImg1.png");
// }

// function setup() {
  
//   createCanvas(500, 500);
   
//   dog=createSprite(200,200,40,40);
//   dog.addImage(d1);
//   dog.scale=0.15;
//   database=firebase.database();
//   foodStock=database.ref('Food');
//   foodStock.on('value',readStock);
//   textSize(20); 
// }


// function draw() {  
//   background(rgb(46,139,87));
//   if(keyWentDown(UP_ARROW))
//   {
//     writeStock(foodS);
//     dog.addImage(dogHappy);
//   }
//   drawSprites();
//   fill(255,255,254);
//   stroke("black");
//   text("Food remaining : "+foodS,100,100);
//   textSize(13);
//   text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);
// }

// function readStock(data)
// {
//   foodS=data.val();
// }

// function writeStock(x)
// {
//   if(x<=0)
//   {
//     x=0;
//   }
//   else
//   {
//     x=x-1;
//   }
//   database.ref('/').update(
//     {
//       Food:x
//     }
//   )
// }


var dog,dogImg,dogImg1;
var database;
var foodS,foodStock;

function preload(){
   dogImg=loadImage("images/dogImg.png");
   dogImg1=loadImage("images/dogImg1.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  dog=createSprite(250,300,150,150);
  dog.addImage(dogImg);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStock.on("value",readStock);
  //console.log(foodStock)
  textSize(15); 
}

// function to display UI
function draw() {
  background("black");
 
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImg1);
  }

  drawSprites();
  fill(255,255,254);
  stroke("black");
  fill("red");
  text("Food remaining : "+foodS,170,200);
  textSize(20);
  text("Press Up Arrow Key To Feed Drago Milk!",130,10,300,20);
}

//Function to read values from DB
function readStock(data){
  //console.log("HelloWorld");
  foodS=data.val();
  //console.log(foodS)
}

//Function to write values in DB
function writeStock(x){
  //console.log(x);
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  } 
  database.ref('/').update({
    Food:x
  })
}