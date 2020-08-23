function setup(){
    var ip_dat = [20,10];
    for(i = 0;i<10;i++){
        ih_wt = new Matrix(3,10);
        ih_wt.randomize();

        ho_wt = new Matrix(11,2);
        ho_wt.randomize();

        nn = neuralNetwork(ip_dat,ih_wt,ho_wt);
        nn.print();
    }
}