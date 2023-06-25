(function () {
    var box = document.getElementsByClassName("box")[0];
    var btn = document.getElementById("fillBtnID");
    var startingColor = document.getElementById("startingColorID");
    var encoding = document.getElementById("encodingID");
    var interval = document.getElementById("intervalID");
    var increment = document.getElementsByClassName("increment");
    var on = true;
    btn.addEventListener("click", function () {
        if (on) {
            btn.innerText = "Stop";
            on = false;
        }
        else {
            btn.innerText = "Start";
            on = true;
        }
    });
    startingColor.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            validateInput();
            box.style.background = "#".concat(startingColor.value);
        }
    });
    document.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            // check if the event targer if one of the increment inputs (event targer=element that triggered the event)
            if (Array.from(increment).includes(e.target)) {
                increment = Array.from(increment);
                incrementColor(increment[0], increment[1], increment[2]);
            }
        }
    });
    interval.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
        }
    });
    // VALIDATE 
    // i need to color to stay when refreshed
    function incrementColor(incrementRed, incrementBlue, incrementGreen) {
        var color = "#".concat(startingColor.value);
        var red = color.substring(1, 3);
        var green = color.substring(3, 5);
        var blue = color.substring(5, 7);
        var decRR = parseInt(red, 16); // hex -> decimal
        var decGG = parseInt(green, 16);
        var decBB = parseInt(blue, 16);
        console.log(decRR);
        decRR += Number(incrementRed.value);
        decGG += Number(incrementGreen.value);
        decBB += Number(incrementBlue.value);
        decRR = Math.max(0, Math.min(decRR, 255));
        decGG = Math.max(0, Math.min(decGG, 255));
        decBB = Math.max(0, Math.min(decBB, 255));
        // instead of forEach
        var hexRR = decRR.toString(16).padStart(2, "0"); // dec -> hex
        var hexGG = decGG.toString(16).padStart(2, "0");
        var hexBB = decBB.toString(16).padStart(2, "0");
        console.log(hexRR);
        console.log(hexRR, hexGG, hexBB);
        color = "#".concat(hexRR).concat(hexGG).concat(hexBB);
        box.style.background = color;
        // ori 0 rogor
        return { hexRR: hexRR, hexBB: hexBB, hexGG: hexGG };
    }
    //  ???????????????????
    function validateInput() {
        var hexCode = startingColor.value.trim();
        if (!/^[0-9A-Fa-f]{6}$/.test(hexCode)) {
            console.warn("Invalid hexadecimal color code!");
        }
        var letters = 'ghijklmnopqrstuvwxyz';
        var validated = true;
        letters.split("").forEach(function (letter) {
            if (startingColor.value.includes(letter)) {
                validated = false;
            }
        });
        if (validated) {
            return true;
        }
    }
})();
