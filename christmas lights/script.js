(function () {
    var startStopBtn = document.getElementById("startStopBtnID");
    var runBtn = document.getElementById("runBtnID");
    var element = document.getElementById("elementNumberID");
    var colorInput = document.getElementById("colorInputID");
    var intensity = document.getElementById("intensityID");
    var width = document.getElementById("widthID");
    var height = document.getElementById("heightID");
    var rows = document.getElementById("rowNoID");
    var lights = document.getElementsByTagName("li");
    // give them the default color
    // give colors with js? bc css too long
    // maybe the color/etfc inputs need button as well?
    // keydown will be the event
    var on = false;
    startStopBtn.addEventListener("click", function () {
        if (on) {
            removeLights();
        }
        else
            addLights(); // not working without else?
    });
    // style inputs
    runBtn.addEventListener("click", function () {
        if (on) {
            changeSpeed();
        }
    });
    element.addEventListener("keydown", function () {
        var el = lights[2 * Number(element.value) - 1];
    });
    colorInput.addEventListener("change", function () {
    });
    // should be able to do this stuff on all rows
    rows.addEventListener("keydown", function (e) {
        var extraRow = document.getElementsByClassName("extra-row")[0];
        var oneRow = document.getElementsByClassName("one-row")[0];
        var div = document.createElement("div");
        var thisDiv = div.append(oneRow);
        if (e.key === "Enter") {
            for (var i = 0; i < Number(rows.value); i++) {
                extraRow.insertBefore(thisDiv, oneRow);
            }
        }
    });
    function addLights() {
        on = true;
        startStopBtn.innerText = "Stop";
        for (var i = 0; i < lights.length; i++) {
            if (i % 2 !== 0) {
                lights[i].classList.add("shadow-animation-".concat(i));
            }
        }
    }
    function removeLights() {
        on = false;
        startStopBtn.innerText = "Start";
        for (var i = 0; i < lights.length; i++) {
            if (i % 2 !== 0) {
                lights[i].classList.remove("shadow-animation-".concat(i));
            }
        }
    }
    function changeSpeed() {
        var speed = document.getElementById("speedID");
        for (var i = 0; i < lights.length; i++) {
            if (i % 2 !== 0 && speed.value > 0) {
                lights[i].style.animationDuration = "".concat(speed.value, "s");
            }
        }
        // refresh when turned off
        // if speed.value === 0?
    }
    function changeColor(elNum, color) {
        elNum.style.backgroundColor = color.value;
    }
})();
