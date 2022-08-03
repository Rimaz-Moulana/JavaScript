
function PF(){
    var sub = document.getElementById("subject").value;
    var marks = document.getElementById("marks").value;
    
    if( marks < 35 )
    {
    document.getElementById("msg").innerHTML = "Sorry.. You have work hard for";
    document.getElementById("sub").innerHTML = sub;
    }
};
