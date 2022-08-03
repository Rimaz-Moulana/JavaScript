
    var today = new Date().toLocaleTimeString([],{ hour: '2-digit' , minute: '2-digit'});
    var remainshour = 24 - new Date().getHours() - 1;
    
    document.getElementById("time").textContent = today;
    document.getElementById("retime").textContent = remainshour;

