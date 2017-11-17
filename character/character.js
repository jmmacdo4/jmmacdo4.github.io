function printStats() {
    let stats = new Array();
    stats[0] = document.getElementById("str").value;
    stats[1] = document.getElementById("dex").value;
    stats[2] = document.getElementById("con").value;
    stats[3] = document.getElementById("int").value;
    stats[4] = document.getElementById("wis").value;
    stats[5] = document.getElementById("chr").value;

    for ( i = 0; i < 6; i++ ) {
        if ( stats[i] === "1" ) {
            stats[i] = 15;
        }
        if ( stats[i] === "2" ) {
            stats[i] = 14;
        }
        if ( stats[i] === "3" ) {
            stats[i] = 13;
        }
        if ( stats[i] === "4" ) {
            stats[i] = 12;
        }
        if ( stats[i] === "5" ) {
            stats[i] = 10;
        }
        if ( stats[i] === "6" ) {
            stats[i] = 8;
        }
    }

    let valid = true;

    for ( i = 0; i < 6; i++ ) {
        for ( j = i+1; j < 6; j++ ) {
            if ( stats[i] === stats[j] ) {
                valid = false;
            }
        }
    }

    //Adding stats based on class
    let race = document.getElementById("race").value;
    if ( race.toLowerCase() === "human" ) {
        for ( i = 0; i < 6; i++) {
            stats[i]++;
        }
    } else if ( race.toLowerCase() === "elf" || race.toString.toLowerCase === "halfling" ) {
        stats[1] += 2;
    } else if ( race.toString().toLowerCase() === "dwarf" ) {
        stats[2] += 2;
    } else if ( race.toString().toLowerCase() === "gnome" ) {
        stats[3] += 2;
    } else if ( race.toString().toLowerCase() === "firbolg" ) {
        stats[4] += 2;
        stats[0]++;
    } else {
        alert("I'm sorry your race isn't supported by default. Look up your stats bonuses on any DnD website.");
    }

    let mods = new Array();
    for ( i = 0; i < 6; i++ ) {
        if ( stats[i] == 1 ) {
            mods[i] = -5;
        } else if ( stats[i] == 2 || stats[i] == 3 ) {
            mods[i] = -4;
        } else if ( stats[i] == 4 || stats[i] == 5 ) {
            mods[i] = -3;
        } else if ( stats[i] == 6 || stats[i] == 7 ) {
            mods[i] = -2;
        } else if ( stats[i] == 8 || stats[i] == 9 ) {
            mods[i] = -1;
        } else if ( stats[i] == 10 || stats[i] == 11 ) {
            mods[i] = 0;
        } else if ( stats[i] == 12 || stats[i] == 13 ) {
            mods[i] = 1;
        } else if ( stats[i] == 14 || stats[i] == 15 ) {
            mods[i] = 2;
        } else if ( stats[i] == 16 || stats[i] == 17 ) {
            mods[i] = 3;
        } else if ( stats[i] == 18 || stats[i] == 19 ) {
            mods[i] = 4;
        } else if ( stats[i] == 20 ) {
            mods[i] = 5;
        }
    }

    if ( valid ) {
        return "Strength: " + stats[0] + " Modifier: " + mods[0] +"</br>" +
            "Dexterity: " + stats[1] + " Modifier: " + mods[1] +"</br>" +
            "Constitution: " + stats[2] + " Modifier: " + mods[2] +"</br>" +
            "Intelligince: " + stats[3] + " Modifier: " + mods[3] +"</br>" +
            "Wisdom: " + stats[4] + " Modifier: " + mods[4] +"</br>" +
            "Charisma: " + stats[5] + " Modifier: " + mods[5] +"</br>";
    } else {
        return "You selected two or more of the same statistic </br>";
    }

}

function printCharacter() {
    let name = document.getElementById("name").value;
    let cls = document.getElementById("class").value;
    let race = document.getElementById("race").value;

    document.getElementById("statsOut").innerHTML = "You are " + name + ", a " + race + " " + cls +
        " and here are your stats: </br>" + printStats();
}