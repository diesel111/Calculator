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
    const board = gameBoard;
// Keep an Eye on this if behavior gets weird.




    return {
        drawBoard: function() {
            for (let i =0; i<3; i++) {
                for (let j = 0; j<3; j++){
                    gridElements[i][j].innerHTML = board.gridState()[i][j];
                }
            }
        },

        clickSquare: function(square) {
            let i = Number(square.id.charAt(0));
            let j = Number(square.id.charAt(1));
            let symbol = "X";
            board.placeMove(i, j, symbol);
            game.drawBoard();


        },

        init: function() {
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
        }
    }
})();

game.init();