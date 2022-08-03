function agefun(){
    var dateString = document.getElementById("bday").value;
    var today = new Date();
    var birthday = new Date(dateString);
    var age = today.getFullYear() - birthday.getFullYear();
    var m = today.getMonth() - birthday.getMonth() ;
    if( m < 0 || (m === 0 && today.getDate() < birthday.getDate()))
    {
        age--;
    }
    alert(age+" years old");
}