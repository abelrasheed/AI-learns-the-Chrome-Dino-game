
function feedforward(ip_dat,ih_wt,ho_wt){
    {
        ip_node = Matrix.fromArray(ip_dat);
        ip_node = Matrix.addbias(ip_node,2);


        z1 = Matrix.multiply(ip_node , ih_wt);
        z1.map(sigmoid);
        z1 = Matrix.addbias(z1,10);

        z2 = Matrix.multiply(z1,ho_wt);
        z2.map(sigmoid);
        return z2;

    }
}

function sigmoid(x){
    x = 1 / (1 + Math.exp(-x));
    return x;
}

