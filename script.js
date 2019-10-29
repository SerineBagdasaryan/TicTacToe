let x ="X";
let o = "O";
let step = 0;
let startGame = document.getElementById("start");
startGame.addEventListener("click",function () {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    if(name1){
        document.getElementById("player1").innerHTML = name1 + ":";
    }
    if(name2){
        document.getElementById("player2").innerHTML= name2 + ":";

    }
    document.getElementById("info").style.display = "block";
    document.getElementById("name-board").style.display= "none";
    document.getElementById("game-board").style.display = "block";
})

for (let i = 0; i< 9; i++){
    let btn = document.createElement("button");
    btn.setAttribute("class", "kochak");
    document.getElementById("game-board").appendChild(btn);

}

let button= document.querySelectorAll(".kochak");
console.log(button);
for(let i = 0; i<button.length; i++){
    button[i].addEventListener("click", setValue);
}
function setValue() {
    if(this.innerHTML != ""){
        return;
    }
    if(step% 2 ==0){
       this.innerHTML= x;
    }
    if(step%2 !== 0){
        this.innerHTML = o;
    }
    step++;
    winner();
}
let score1 = document.getElementById("score1");
let score2= document.getElementById("score2");
let win = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
let a = 0;
let b = 0;
function winner() {
    for (let i= 0; i < win.length;i++){
       if(button[win[i][0]].innerHTML == x && button[win[i][1]].innerHTML == x && button[win[i][2]].innerHTML==x) {
           for(let j = 0;j< win[i].length; j++){
               button[win[i][j]].style.background = "purple";
               button[win[i][j]].style.color = "white";
           }
           a = a+1;
           score1.innerHTML = a;
           rClick();
       }
       if(button[win[i][0]].innerHTML== o && button[win[i][1]].innerHTML == o && button[win[i][2]].innerHTML == o){
           for(let j = 0; j<win[i].length;j++){
               button[win[i][j]].style.background= "blue";
               button[win[i][j]].style.color = "white";
           }
           b= b+1;
           score2.innerHTML = b;
           rClick();
       }
    }
}
function rClick() {
    for(let i = 0; i<button.length; i++){
        button[i].removeEventListener("click",setValue);
    }
}