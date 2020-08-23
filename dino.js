
class Dino {
constructor(ih_wt,ho_wt){
  this.y=415;
  this.x=60;
  this.gravity =1.2;
  this.velocity=12;

  this.z2 = new Matrix(1,2);
  this.ih_wt = ih_wt;

  this.ho_wt = ho_wt;
  this.op = new Matrix(1,1);

  this.fitness = 0;
  this.score = 0;
  this.notdead =true;

} 
 show() {
  fill(200,40,60);
  image(dino_img,this.x ,this.y, 250, 150);
 }

 update(){
   this.velocity-=this.gravity;
   this.y-=this.velocity;

   if(this.y>415){
     this.velocity=0;
     this.y=415;
   }
 }

  makeDecision(distan_input){
  this.op = feedforward(distan_input,this.ih_wt,this.ho_wt);
  if(this.op.data[0][0] >= 0.5){
    return true;
  }
  else{
    return false;
  }
 }
 jump(decision){
  if(decision){
     if(this.y==415){
      this.velocity=21;
     }
   }
  }
  die(distan){
    this.x = -1000;
    this.score = distan;
    this.notdead = false;
    genePool.push(this);
  }

}
