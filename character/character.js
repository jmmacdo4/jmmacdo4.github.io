function printStats() {
    let stats = new Array();
    stats[0] = document.getElementById("one").value;
    stats[1] = document.getElementById("two").value;
    stats[2] = document.getElementById("three").value;
    stats[3] = document.getElementById("four").value;
    stats[4] = document.getElementById("five").value;
    stats[5] = document.getElementById("six").value;

    let valid = true;

    for ( i = 0; i < 6; i++ ) {
        for ( j = i+1; j < 6; j++ ) {
            if ( stats[i] === stats[j] ) {
                valid = false;
            }
        }
    }

    if ( valid ) {
        return stats[0] + ": 15" + "</br>" +
            stats[1] + ": 14" + "</br>" +
            stats[2] + ": 13" + "</br>" +
            stats[3] + ": 12" + "</br>" +
            stats[4] + ": 10" + "</br>" +
            stats[5] + ": 8" + "</br>";
    } else {
        return "You selected two or more of the same statistic </br>";
    }

}

function printCharacter() {
    console.log("in printCharacter");
    let name = document.getElementById("name").value;
    let cls = document.getElementById("class").value;
    let race = document.getElementById("race").value;

    document.getElementById("statsOut").innerHTML = "You are " + name + ", a " + race + " " + cls +
        " and here are your stats: </br>" + printStats();
}