(function () {
    var box = document.getElementsByClassName("box")[0];
    var btn = document.getElementById("fillBtnID");
    var startingColor = document.getElementById("startingColorID");
    var encoding = document.getElementById("encodingID");
    var incrementRed = document.getElementById("incrementRedID");
    var incrementGreen = document.getElementById("incrementGreenID");
    var incrementBlue = document.getElementById("incrementBlueID");
    var interval = document.getElementById("intervalID");
    var color = "#".concat(startingColor.value);
    var on = false;
    btn.addEventListener("click", function () {
        if (on) {
        }
    });
    startingColor.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            validateInput();
            box.style.background = color;
        }
    });
    incrementRed.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            var incr = incrementRed.value;
            console.log(incr);
        }
    });
    incrementGreen.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            var incr = incrementGreen.value;
            console.log(incr);
        }
    });
    incrementBlue.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            var incr = incrementBlue.value;
            console.log(incr);
        }
    });
    interval.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
        }
    });
    // VALIDATE 
    // i need to color to stay when refreshed
    function incrementColor() {
    }
    //  ???????????????????
    function validateInput() {
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
