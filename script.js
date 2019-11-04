let size = prompt("Enter board size", 5);
if(size > 100){
    alert("Enter a number less than 100");
}
else if(size <=3){
    alert("Enter big number");
}
else {
    window.onload = function () {
        let buttons = document.getElementsByTagName('td');
        console.log(buttons);
        let turn;
        let computer;
        let user;
        function randomNumber() {
            let item = size*size;
            console.log(item);
            console.log(Math.floor(Math.random() * (item)))
            return Math.floor(Math.random() * (item));
        }
        randomNumber();
        $(".checkBox").click(function() {
            console.log("checked");
            if($(this).is(":checked")) {
                turn = $(this).val();
                user = turn;
                // computer= turn;
                computer = (user == 'X') ? 'O' : 'X';
                console.log(turn + " " + user + " " + computer);
                document.getElementById('tictactoe').style.display = "block";
                document.getElementById('players').style.display = "none";
            }
        });
        let board;
        let squares = [],
            empty = "",
            score,
            moves,
            newGame = function () {
            turn,
                score = {
                    "X": 0,
                    "O": 0
                };
                moves = 0;
                squares.forEach(function (square) {
                    square.html(empty);
                });


        }


        getWinner = function (clicked) {
            let xOrO = clicked[0].className.split(/\s+/);
            for (let i = 0; i < xOrO.length; i++) {
                let newClass = '.' + xOrO[i];
                if ($('#tictactoe').find(newClass + ':contains(' + turn + ')').length == size) {

                    return true;
                }
            }
            return false;
        }


        set = function () {
            let item = size* size;
            if ($(this).html() !== empty) {
                return;
            }
            $(this).html(turn);
            moves += 1;
            score[turn] += $(this)[0].indicator;
            // console.log(score[turn]);
            if (getWinner($(this))) {
                alert(turn + "winns!");
                newGame();
            } else if (moves === size * size) {
                alert('\n' +
                    'the game ended in a draw');

            } else {
                for (let i=0; i < item; i++) {
                    let random = randomNumber();
                    if (buttons[random].innerHTML === "X" || buttons[random].innerHTML === "O") {
                        continue;
                    }
                    else {
                        buttons[random].innerHTML = computer;
                        break;
                    }
                }

            }
            draw();

        }

        function draw() {
        let items= size*size;
            let counter = 0;
            while (counter < items) {

                if (buttons[counter].innerHTML === "X" || buttons[counter].innerHTML === "O") {
                    console.log(buttons[counter].innerHTML)
                    console.log("has an X or Y")
                    counter += 1;
                }
                else {
                    console.log("there is nothing there")
                    return;
                }
                if (counter === items-1) {
                    alert("its a draw")
                    $("td").text("")
                }
            }
        }

        playGame = function () {
            board = $("<table border=1 cellspacing=0>"),
                indicator = 1;
               let cell;
            for (let i = 0; i < size; i += 1) {
                let row = $("<tr>");
                board.append(row);
                for (let j = 0; j < size; j += 1) {
                    cell = $("<td height=120 width= 120 align=center valign=center></td>");
                    cell.addClass('col' + j);
                    cell.addClass('row' + i);
                    if (i == j) {
                        cell.addClass('downrigth');
                    }
                    if (j == size - i - 1) {
                        cell.addClass('upright');
                    }
                    cell[0].indicator = indicator;
                    cell.click(set);

                    row.append(cell);
                    squares.push(cell);

                    indicator += indicator;
                }
                // console.log(cell, row);

            }
            $(document.getElementById("tictactoe") || document.body).append(board);
            newGame();
        };
        playGame();
    }
}