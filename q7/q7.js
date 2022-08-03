function disableFun(){
    var a = document.getElementById("wed");
    var b = document.getElementById("bday");
    var c = document.getElementById("normal");
    var d = document.getElementById("dayout");

    if(a.checked == true && b.checked == false && c.checked == false && d.checked == false)
    {
        b.disabled = true;
        c.disabled = true;
        d.disabled = true;
    }
    else if(b.checked == true && a.checked == false && c.checked == false && d.checked == false)
    {
        a.disabled = true;
        c.disabled = true;
        d.disabled = true;
    }
    else if(c.checked == true && a.checked == false && b.checked == false && d.checked == false)
    {
        a.disabled = true;
        b.disabled = true;
        d.disabled = true;
    }
    else
    {
        a.disabled = true;
        b.disabled = true;
        c.disabled = true;
    }
}