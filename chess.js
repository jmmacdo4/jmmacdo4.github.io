class Piece {
    constructor( type, color, row, col ) {
        this.type = type;
        this.color = color;
        this.row = row;
        this.row = col;

        var rowMax = 8;
        var colMax = 8;

        this.moves = new Array();
        resetMoves();
    }

    resetMoves() {
        for ( i=0; i < rowMax; i++ ) {
            moves[i] = new Array();
            for ( j = 0; j < colMax; j++ ) {
                moves[i][j] = 0;
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
        return moves;
    }
}

class King extends Piece {
    constructor( color, row, col ) {
        super( "King", color, row, col );
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
}

class Queen extends Piece {
    constructor( color, row, col ) {
        super("Queen", color, row, col );
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
}

class Rook extends Piece {
    constructor( color, row, col ) {
        super("Rook", color, row, col );
    }

    setMoves() {
        resetMoves();

    }
}

class Bishop extends Piece {
    constructor( color, row, col ) {
        super("Bishop", color, row, col );
    }

    setMoves() {
        resetMoves();
        
    }
}

class Knight extends Piece {
    constructor( color, row, col ) {
        super("Knight", color, row, col );
    }

    setMoves() {
        resetMoves();
        
    }
}

class Pawn extends Piece {
    constructor( color, row, col ) {
        super("Rook", color, row, col );
    }

    setMoves() {
        resetMoves();
        
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
        console.log('hello1');
        this.board = new Array();
        for ( i = 0; i < 8; i++ ) {
            board[i] = new Array();
            for ( j = 0; j < 8; j++ ) {
                if ( i > 2 && i < 6 ) {
                    board[i][j] = 0;
                }
            }
        }
        let color = 'w';
        for ( i = 0; i < 8; i+=7 ) {
            board[i][0] = new Rook( color, i, 0 );
            board[i][7] = new Rook( color, i, 7 );
            board[i][1] = new Knight( color, i, 1 );
            board[i][6] = new Knight( color, i, 6 );
            board[i][2] = new Bishop( color, i, 2 );
            board[i][5] = new Bishop( color, i, 5);
            board[i][3] = new Queen( color, i, 3);
            board[i][4] = new King( color, i, 4 );
            color = 'b';
        }
        color = 'w';
        for (  i = 1; i < 7; i+=5 ) {
            for ( j = 0; j < 8; j++ ) {
                board[i][j] = new Pawn( color, i, j );
            }
            color = 'b';
        }
    }

    drawBoard() {
        return 'abc';
    }

    
}

function drawGrid() {
    var c = document.getElementById("myCanvas");
    const boardSize = c.getAttribute("height");
    var ctx = c.getContext("2d");
    for ( i = 1; i <=8; i++ ) {
        ctx.moveTo( i*boardSize/8, 0 );
        ctx.lineTo( i*boardSize/8, boardSize );
        ctx.stroke();

        ctx.moveTo( 0, i*boardSize/8 );
        ctx.lineTo( boardSize, i*boardSize/8 );
        ctx.stroke();
    }
}

function drawBoard() {
    let board = new Board();
    //console.log(board.drawBoard());
}