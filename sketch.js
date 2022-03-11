var bg, bgimg;
var player,playerimg;
var boy,boyImg;
var coinG,coin,coinImg;


function preload(){
 bgimg = loadImage("newbg.png");
 boyImg = loadAnimation("ibri.png","2bri.png");
 coinImg = loadImage("Coin.png")
 //cone = loadImage("Cone.png")
 //bannana =  loadImage("Bannana.png")
}

function setup(){
createCanvas(1200,700);
bg=createSprite(600,350);
bg.addImage(bgimg);
bg.scale = 2.15;

boy = createSprite(300,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.25;

coinG=new Group();



}


function draw(){
    background(0);

bg.velocityY = 2;
boy.x = World.mouseX;

edges= createEdgeSprites();
boy.collide(edges);

if(bg.y >400){
bg.y = bg.height/2;
}

createCoin();

    drawSprites();
}

function createCoin() {
    if (World.frameCount % 200 == 0) {
    var cash = createSprite(Math.round(random(50, 350),40, 10, 10));
    coin.addImage(CoinImg);
    coin.scale=0.12;
    coin.velocityY = 3;
    coin.lifetime = 150;
    coinG.add(coin);
    }
  }
  