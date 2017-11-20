class Piece {
    constructor( type, color, row, col ) {
        this.type = type;
        this.color = color;
        this.row = row;
        this.row = col;

        this.moves = new Array();
        for ( let i=0; i < 8; i++ ) {
            this.moves[i] = new Array();
            for ( let j = 0; j < 8; j++ ) {
                this.moves[i][j] = 0;
            }
        }
    }

    resetMoves() {
        for ( let i=0; i < 8; i++ ) {
            this.moves[i] = new Array();
            for ( let j = 0; j < 8; j++ ) {
                this.moves[i][j] = 0;
            }
        }
    }

    move( row, col ) {
        if ( moves[row][col] === 1 ) {
            this.row = row;
            this.col = col;
            setMoves();
            return true;
        }
        return false;
    }

    getMoves() {
        return this.moves;
    }

    getType() {
        return this.type;
    }
}

class King extends Piece {
    constructor( color, row, col ) {
        super( "King", color, row, col );
        this.image = new Image();
        this.image.src = `images/${color}king.png`;
    }

    setMoves() {
        resetMoves();
        let row = this.row;
        let col = this.col;
        moves[row-1][col] = 1;
        moves[row+1][col] = 1;
        moves[row][col-1] = 1;
        moves[row][col+1] = 1;
        moves[row-1][col-1] = 1;
        moves[row+1][col+1] = 1;
        moves[row-1][col+1] = 1;
        moves[row+1][col-1] = 1;  
    }

    getImage() {
        return this.image;
    }
}

class Queen extends Piece {
    constructor( color, row, col ) {
        super("Queen", color, row, col );
        this.image = new Image();
        this.image.src = `images/${color}queen.png`;
    }

    setMoves() {
        resetMoves();
        while ( row + 1 < 8 && col + 1 < 8 ) {
            moves[row+1][col+1] = 1;
        }
        while ( row - 1 < 8 && col + 1 < 8 ) {
            moves[row-1][col+1] = 1;
        }
        while ( row + 1 < 8 && col - 1 < 8 ) {
            moves[row+1][col-1] = 1;
        }
        while ( row - 1 < 8 && col - 1 < 8 ) {
            moves[row-1][col-1] = 1;
        }
    }
    getImage() {
        return this.image;
    }
}

class Rook extends Piece {
    constructor( color, row, col ) {
        super("Rook", color, row, col );
        this.image = new Image();
        this.image.src = `images/${color}rook.png`;
    }

    setMoves() {
        this.resetMoves();
    }
    getImage() {
        return this.image;
    }
}

class Bishop extends Piece {
    constructor( color, row, col ) {
        super("Bishop", color, row, col );
        this.image = new Image();
        this.image.src = `images/${color}bishop.png`;
    }

    setMoves() {
        resetMoves();  
    }
    getImage() {
        return this.image;
    }
}

class Knight extends Piece {
    constructor( color, row, col ) {
        super("Knight", color, row, col );
        this.image = new Image();
        this.image.src = `images/${color}knight.png`;
    }

    setMoves() {
        resetMoves();
        
    }
    getImage() {
        return this.image;
    }
}

class Pawn extends Piece {
    constructor( color, row, col ) {
        super("Pawn", color, row, col );
        this.image = new Image();
        this.image.src = `images/${color}pawn.png`;
    }

    setMoves() {
        resetMoves();
        
    }
    getImage() {
        return this.image;
    }
}

class Tile {
    constructor( piece ) {
        this.occupied = piece == null;
        this.piece = piece;
    }
}

class Board {
    constructor() {
        //console.log('inside Board constructor');
        this.board = new Array();
        for ( let i = 0; i < 8; i++ ) {
            this.board[i] = new Array();
            for ( let j = 0; j < 8; j++ ) {
                //if ( i > 2 && i < 6 ) {
                    this.board[i][j] = 0;
                //}
            }
        }
        let color = 'w';
        for ( let i = 0; i < 8; i+=7 ) {
            this.board[i][0] = new Rook( color, i, 0 );
            this.board[i][7] = new Rook( color, i, 7 );
            this.board[i][1] = new Knight( color, i, 1 );
            this.board[i][6] = new Knight( color, i, 6 );
            this.board[i][2] = new Bishop( color, i, 2 );
            this.board[i][5] = new Bishop( color, i, 5);
            this.board[i][3] = new Queen( color, i, 3);
            this.board[i][4] = new King( color, i, 4 );
            color = 'b';
        }
        color = 'w';
        for (  let i = 1; i < 7; i+=5 ) {
            for ( let j = 0; j < 8; j++ ) {
                this.board[i][j] = new Pawn( color, i, j );
            }
            color = 'b';
        }
    }

    getTile( row, col ) {
        return this.board[row][col];
    }

    /**
     * Draws a board using the html canvas boject 
     * @param {*} length 
     */
    drawBoard() {
        let color = 'white';
        for ( let i = 7; i >= 0; i-- ) {
            for ( let j = 0; j < 8; j++ ) {
                document.getElementById("board").innerHTML +=
                 `<canvas id="r${i}c${j}" class="${color}" width="80" height="80" style="border:1px solid #000000;">`;
                //  if ( this.board[i][j] != 0 ) {
                //     var c=document.getElementById(`r${i}c${j}`);
                //     var ctx=c.getContext("2d");
                //     var img= this.board[i][j].getImage();
                //     //console.log(this.board[i][j]);
                //     //ctx.drawImage(img, 0, 0);
                //  }
                 if ( color === "black" ) {
                     color = "white";
                 } else {
                     color = "black";
                 }
            }
            document.getElementById("board").innerHTML += "</br>";
            if ( color === "black" ) {
                color = "white";
            } else {
                color = "black";
            }
        }
    }

    
}

function drawGrid() {
    var c = document.getElementById("myCanvas");
    const boardSize = c.getAttribute("height");
    var ctx = c.getContext("2d");
    for ( let i = 1; i <=8; i++ ) {
        ctx.moveTo( i*boardSize/8, 0 );
        ctx.lineTo( i*boardSize/8, boardSize );
        ctx.stroke();

        ctx.moveTo( 0, i*boardSize/8 );
        ctx.lineTo( boardSize, i*boardSize/8 );
        ctx.stroke();
    }
}

window.onload = function() {
    let board = new Board();
    board.drawBoard();
    let color = 'white';
    for ( let i = 7; i >= 0; i-- ) {
        for ( let j = 0; j < 8; j++ ) {
             if ( board.getTile(i,j) != 0 ) {
                var c=document.getElementById(`r${i}c${j}`);
                var ctx=c.getContext("2d");
                var img= board.getTile(i,j).getImage();
                //console.log(this.board[i][j]);
                ctx.drawImage(img, 10, 10);
             }
             if ( color === "black" ) {
                 color = "white";
             } else {
                 color = "black";
             }
        }
        if ( color === "black" ) {
            color = "white";
        } else {
            color = "black";
        }
    }
}
