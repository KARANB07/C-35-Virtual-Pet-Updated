var  dog, happyDog,database,foodS,foodStock;


function preload(){

  d1 = loadImage("images/dogImg.png");
  d2 = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500,500);
  dog = createSprite(250,250,10,10);
  dog.addImage(d1);
  dog.scale = 0.2;
  database = firebase.database();
  foodStock = database.ref('food');
  foodStock.on("value", readStock);
}

function draw() {  
  background("lime");
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(d2);
  }

  drawSprites();
  //add styles here
  strokeWeight()
  stroke("red");

  text("Food Remaining:" + foodS, 250,480);
}

function readStock(data){
  foodS=data.val();
}

function writeStock (x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }

  database.ref('/').update({
    food: x 
  })
}