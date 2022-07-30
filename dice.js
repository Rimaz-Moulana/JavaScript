var p1 = 0;
var p2 = 0;
var score = 0;
var i = 0;
var j = 1;

document.getElementById("reset").onclick = function(){
    document.getElementById("player1").innerHTML = 0;
    document.getElementById("player2").innerHTML = 0;
    p1 = 0;
    p2 = 0;
}
function JSalert(){
	swal("A Basic JS alert by a plug-in");
}
function game(){
    
    const firstRandomNum = Math.floor(Math.random()*6)+1;
    const secondRandomNum = Math.floor(Math.random()*6)+1;

    const dice1 = 'photos/dice_'+ firstRandomNum + '.png';
    document.querySelectorAll("img")[0].setAttribute("src",dice1);

    const dice2 = 'photos/dice_'+secondRandomNum+'.png';
    document.querySelectorAll('img')[1].setAttribute("src",dice2);

    score = (firstRandomNum + secondRandomNum);
    
    if(i == 0)
    {
        p1 = p1 + score;
            if(p1 < 100 )
            {
            
                if(score != 2 && firstRandomNum != secondRandomNum)
                {
                    document.getElementById("player1").innerHTML = p1;
                    i = i + j;
                }
                else if( score != 2 && firstRandomNum == secondRandomNum)
                {
                    document.getElementById("player1").innerHTML = p1;
                }
                else
                {       
                    if(score == 2)
                    {
                        document.getElementById("player1").innerHTML = 0;
                        p1 = 0;
                        i = i + j;
                    }    
                }
            }
            else
            {
                if(p1 >= 100 )
                {
                    document.getElementById("player1").innerHTML = 100;
                    // alertify.alert('Alert Title', 'Alert Message!', function(){ alertify.success('Ok'); });
                    alert("Player1 Win");
                }
            }
            }
    else{
        p2 = p2 + score;
        if(i == 1)
        {
            if(p2 < 100)
            {
                if(score != 2 && firstRandomNum != secondRandomNum)
                {
                    document.getElementById('player2').innerHTML = p2;
                    i = i - j;
        
                }
                else if( score != 2 && firstRandomNum == secondRandomNum)
                {
                    document.getElementById('player2').innerHTML = p2;
                }
                else if(p2 >= 100 )
                {
                    document.getElementById("player2").innerHTML = 100;
                    i = i - j;
                }
                else
                {
                    if(score == 2 )
                    {
                        document.getElementById("player2").innerHTML = 0;
                        p2 = 0;
                        i = i - j;
                    }    
                }
            }
            else
            {
                if(p2 >= 100 )
                    {
                        document.getElementById("player2").innerHTML = 100;
                        // alertify.alert('Alert Title', 'Alert Message!', function(){ alertify.success('Ok'); });
                        alert("Player2 Win");
                    }
            }
        
        }
    }
}