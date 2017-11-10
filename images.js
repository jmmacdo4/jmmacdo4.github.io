function drawLine() {
    var c = document.getElementById("myCanvas");
    const boardSize = c.getAttribute("height");
    var ctx = c.getContext("2d");
    ctx.moveTo(0,0);
    ctx.lineTo(boardSize, boardSize);
    ctx.stroke();
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