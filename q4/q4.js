// function areafun(){
//     var width = document.getElementById("width").value;
//     var heigth = document.getElementById("heigth").value;
//     var x = width*heigth;
//     BigInt.setAttribute('disabled','disabled');
//     console.log(x);
//     document.getElementById("area").textContent = x;
//     return false;    
// }
    // var y = areafun().value;
    // console.log(y);
    // document.getElementById("area").textContent = y;
    // function reset(){
    //     document.getElementById('height').value = "";
    //     document.getElementById('length').value = "";
    //     document.getElementById('result').innerHTML = "";
    //     document.getElementById('btn').removeAttribute('disabled');
    // }
     
    function areafun(){
        var height = document.getElementById("heigth").value;
        var width = document.getElementById("width").value;
     
        var area = (width * height);

        // console.log(area);
        document.getElementById("area").innerHTML = area;
    }
