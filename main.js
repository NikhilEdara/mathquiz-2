function addUser(){
    player1=document.getElementById("player1_name_input").value;
    player2=document.getElementById("player2_name_input").value;
    localstorage=("player1",player1);
    localStorage=("player2",player2);
    window.location=game.html;
}