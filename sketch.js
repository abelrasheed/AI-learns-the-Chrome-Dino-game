var dino = [];
var gameOver=0;
var plants = [];
var distan =0;
let dino_img;
let bg_img;
let cactus_img;
var count = 0;
var distan_input = [0,0]
let dec;
const population = 150;
let strength;
var genePool = [];
const mutate_rate = .01;
var generation = 0;

function preload() {
  dino_img = loadImage("trex3.png")
  bg_img = loadImage("background4.jpg")
  cactus_img = loadImage("Cactus.png")
}

function setup() {
    
  // put the initial conditions here
  createCanvas(1500,700);
  create_pop();
  plants.push(new Plant());
 
}

function draw() {
  // drawing code 
  mainfunc()
  for(i = 0;i<dino.length;i++){
    dec = dino[i].makeDecision(distan_input);
    dino[i].jump(dec);
  } 

}
function mainfunc() 
{ 
  background(bg_img);
  for(let dinosaur of dino){
    dinosaur.show();
    dinosaur.update();
  }
  for(i=0;i<dino.length;i++){
     for(var j=plants.length-1; j>=0; j--){
        if( dino[i].y+160 > 565-plants[j].h && plants[j].x + 6 ==210 ){
          if(dino[i].notdead){
            dino[i].die(distan);
            strength--;
            
          } 
          // console.log(dino.length);
        }
     }
  }
  if(strength == 0){
    calFitness();
    create_pop(genePool);
    genePool = [];  
    plants = [];
    distan = 0;
  }
  fill(0);
  stroke(200);
  line(0,565,1500,565);
  textSize(25);
  text("Distance :",1200,150);
  text(distan,1330,150);
  text("generation:",1200,180);
  text(generation,1330,180);
  count += 1;
  distan+=1;
  
  if(random(1) < .015 && plants.length < 2 ){
    
    if (count <= 13 || count >=28){
   
    plants.push(new Plant());
    
    
    count = 0;
    } 
  }
  if(plants.length == 0){
 
    count = 0;
    plants.push(new Plant());
  }
  
  for(var i=plants.length-1; i>=0; i--){
    plants[i].show();
    plants[i].update();
    if (plants[i].offScreen()){
      plants.splice(i,1);
    }
  }
  
  for (var i=0 ; i<2 ; i++){
    if(plants[i] == undefined){
      distan_input[i] = -1/width;
    }
    else if(plants[i].x < 60){
      distan_input[i] = -1/width;
    }
    else{
      distan_input[i] = plants[i].x/width;
    }
  }
  
    // if (plants.length == 1){
    //   distan_input[0] = -1000;
    //   distan_input[1] = plants[i].x;

    // }
    // else{
    //   distan_input[i] = plants[i].x;
    // }
    
   

  
}


