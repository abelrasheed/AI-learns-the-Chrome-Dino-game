class Plant{
  constructor(){
  this.x= width;

  this.w=60; //width
  // this.h=random(90,130); //height
  this.h = 90;
  this.speed = 12;
  this.show = function(){
    fill(200);
    noStroke();
    image(cactus_img,this.x,565-this.h,this.w,this.h);

  }
}
  update(){
    this.x-=this.speed;
  }
  offScreen(){
    if(this.x < -this.w){
      return true;
    }else{
      return false;
    }

}
}
