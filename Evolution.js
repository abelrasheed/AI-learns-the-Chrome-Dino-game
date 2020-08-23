function create_pop(dinosaurs){
    generation++;
    strength = population;
    dino = [];
    if(dinosaurs instanceof Array){
       for(i=0 ; i<population ;i++){
         dino[i] = pickOne();
       } 
    }
    else{
         for(i=0 ; i<population ;i++){
             let ih_wt = new Matrix(3,10);
             ih_wt.randomize();
 
             let ho_wt = new Matrix(11,1);
             ho_wt.randomize();
             dino[i] = new Dino(ih_wt , ho_wt);
         }
    }
 }
function calFitness(){
     let sum = 0;
     for(let dinosaur of genePool){
         sum += dinosaur.score;
     }
 
     for(let dinosaur of genePool){
         dinosaur.fitness = dinosaur.score/sum;
     }
 }
 
function mutate(element){
    let temp_ih_wt = element.ih_wt.copy();
    let temp_ho_wt = element.ho_wt.copy();
    temp = new Dino( temp_ih_wt ,temp_ho_wt);
    // console.table(element.ho_wt.data);
    temp.ih_wt.map(apply_mutate);
    temp.ho_wt.map(apply_mutate);
    return temp;
} 

function apply_mutate(val){
    if(random() < mutate_rate){
        // return Math.random() * 2 - 1;
        return val + randomGaussian(0,0.1);
    }
    else{
        return val;
    }
}
function pickOne(){
    var index = 0;
    var r = random(1);

    while(r>0){
        r = r-genePool[index].fitness;
        index ++;
    }
    index --;
    let ih = genePool[i].ih_wt.copy();
    let ho = genePool[i].ho_wt.copy();
    let child = new Dino(ih , ho);
    child = mutate(child);
    return child;
}