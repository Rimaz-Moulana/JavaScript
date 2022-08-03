function findval(){
    let v = Number(document.getElementById("amount").value);
    let perval = v*0.2;
    let sum = v + perval;
    
    document.getElementById("val").innerHTML = perval;
    document.getElementById("total").innerHTML= v + "+" + perval + "=" + sum;
}
