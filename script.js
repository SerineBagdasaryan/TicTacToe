let size = prompt("Enter board size", 5);
window.onload = function () {
   let squares =[],
   empty= "&nbsp;",
       score,
       moves,
       turn ="X",
newGame = function () {
    turn = "X";
    score = {
        "X": 0,
        "O": 0
    };
    moves = 0;
    squares.forEach(function (square) {
        square.html(empty);
    });
}
 getWinner= function (clicked) {
     let xOrO = clicked[0].className.split(/\s+/);
     for(let i = 0; i< xOrO.length; i++){
         let newClass= '.'+ xOrO[i];
         if($('#tictactoe').find(newClass + ':contains(' +  turn + ')').length == size){
             return true;
         }
     }
     return false;
 }
   set = function () {
     if($(this).html()!== empty){
         return;
     }
     $(this).html(turn);
     moves+=1;
     score[turn] +=$(this)[0].indicator;
     console.log(score[turn]);
     if(getWinner($(this))){
         alert(turn +"winns!");
         newGame();
     }else if(moves === size * size){
         alert('x and o game');

     }else{
         turn = turn === "X"? "O" : "X";
     }
   }

   playGame= function () {
       let board = $("<table border=1 cellspacing=0>"),
           indicator =  1;
       for(let i =0; i< size; i += 1){
           let row = $("<tr>");
           board.append(row);
           for (let j =  0; j< size; j += 1) {
          let cell = $("<td height=120 width= 120 align=center valign=center></td>");
          cell.addClass('col' + j);
          cell.addClass('row' + i);
          if(i==j){
              cell.addClass('downrigth');
          }
          if(j == size -i-1){
              cell.addClass('upright');
          }
          cell[0].indicator= indicator;
          cell.click(set);
          row.append(cell);
          squares.push(cell);
          indicator+=indicator;
           }
       }
       $(document.getElementById("tictactoe") || document.body).append(board);
       newGame();
   };
   playGame();
}
