var gameBoard = (function() {
    const gridState = [[null,null,null],
                       [null,null,null],
                       [null,null,null]];      
      

    return {
        gridState: function() {
            return gridState;
        },

        clearBoard: function() {
            gridState.forEach((square, index) => gridState[index] = [null,null,null]);
        },

        placeMove: function(i, j, symbol) {
            gridState[i][j] = symbol;
        }
    }
})();


var player= (function() {
    return {
        init: function() {
            console.log("HelloWorld")
        }
    }
})();

var game = (function() {
    const gridContainer = document.querySelector("#gridContainer");  
    const gridElements = [];
    const winningTriplets = [["00","01","02"], ["10","11","12"], ["20","21","22"], 
                            ["00","10","20"], ["01","11","21"], ["02","12","22"],
                            ["00","11","22"], ["02","11","20"]]
    var gameBoard;
    var playerMoves = [];
    var computerMoves = [];

    //Populate gridContainer with div for each square.  
    //Squares use row-column coordinates as id's. ie Center Right id="12"
    for (let i = 0; i<3; i++) {
        gridElements.push([]);
        for (let j = 0; j<3; j++){
            gridElements[i].push(document.createElement('div'));
            gridElements[i][j].classList.add("gridSquares");
            gridElements[i][j].setAttribute("id", ""+i+j);
            gridElements[i][j].innerHTML = "";

            gridElements[i][j].addEventListener("click", function(){game.clickSquare(this)});
            
            gridContainer.appendChild(gridElements[i][j]);
        }
    }


    var drawBoard = function() {
        for (let i =0; i<3; i++) {
            for (let j = 0; j<3; j++){
                gridElements[i][j].innerHTML = this.gameBoard.gridState()[i][j];
            }
        }
    };
    
    var computerMove = function(board) {
        boardState = board.gridState();
        let i = Math.floor(Math.random()*3);
        let j = Math.floor(Math.random()*3);
        if (boardState[i][j] == null) {
            board.placeMove(i, j, "O");
            computerMoves.push(""+i+j);
        }   else {
            computerMove(board);
        }
    }
   
    var humanMove = function(i, j) {
        this.gameBoard.placeMove(i, j, "X");
        playerMoves.push(""+i+j);
           }

    var checkWinner = function(moveList) {
        for (let triplet of winningTriplets) {
            console.log(moveList.includes("11"))
            if (triplet.reduce((a, b) => {return (moveList.includes(b) && a)}, true)) {
                alert("Winner")
            }
            /* if (moveList.includes(triplet[0]) && moveList.includes(triplet[1]) && moveList.includes(triplet[2]))
            {alert("Winner")} */

        }
    }

    return {
        startGame: function(board) {
            this.gameBoard = board;
        },

        //I think clickSquare must be puclic to see events to be called by event Listener.  Investigate further
        clickSquare: function(square) {
            let i = Number(square.id.charAt(0));
            let j = Number(square.id.charAt(1));
            if (this.gameBoard.gridState()[i][j] == null) {
                humanMove(i, j);
                drawBoard();
                checkWinner(playerMoves);
                computerMove(this.gameBoard);
                drawBoard();
                checkWinner(computerMoves)
                
            }
            
        },

        test: function() {
            console.log(this);
        },
        
            
        
    }
})();

game.startGame(gameBoard);
