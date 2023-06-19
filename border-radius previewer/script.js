(function () {
    var border = document.getElementById("borderID");
    var inputTopLeft = document.getElementById("inputTopLeftID");
    var inputTopRight = document.getElementById("inputTopRightID");
    var inputBottomLeft = document.getElementById("inputBottomLeftID");
    var inputBottomRight = document.getElementById("inputBottomRightID");
    var inputEndEnd = document.getElementById("inputEndEndID");
    var inputEndStart = document.getElementById("inputEndStartID");
    var inputStartEnd = document.getElementById("inputStartEndID");
    var inputStartStart = document.getElementById("inputStartStartID");
    var inputArr = document.getElementsByTagName("input");
    var btn = document.getElementById("btnID");
    var output = document.getElementById("outputID");
    inputArr = Array.from(inputArr);
    inputArr.forEach(function (input) {
        input.addEventListener("input", function () {
            main(input);
        });
        // the event listener for input event is added to each input field. this event is triggered whenever the input value changes, even without pressing enter.
        input.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                getCSS();
            }
        });
    });
    btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
        copyCode();
        console.log("f");
    });
    function copyCode() {
        var output = document.getElementById("outputID");
        output.focus();
        output.select();
        try {
            var successful = document.execCommand("copy");
            var msg = successful ? "successful" : "unsuccessful";
            console.log("tes");
        }
        catch (err) {
            console.log("no");
        }
    }
    function main(input) {
        var border = document.getElementById("borderID");
        var borderClass = document.querySelector("borderClass");
        switch (input.id) {
            case "inputTopLeftID":
                border.style.borderTopLeftRadius = input.value;
                break;
            case "inputTopRightID":
                border.style.borderTopRightRadius = input.value;
                break;
            case "inputBottomLeftID":
                border.style.borderBottomLeftRadius = input.value;
                break;
            case "inputBottomRightID":
                border.style.borderBottomRightRadius = input.value;
                break;
            case "inputEndEndID":
                border.style.borderEndEndRadius = input.value;
                break;
            case "inputEndStartID":
                border.style.borderEndStartRadius = input.value;
                break;
            case "inputStartEndID":
                border.style.borderStartEndRadius = input.value;
                break;
            case "inputStartStartID":
                border.style.borderStartStartRadius = input.value;
                break;
        }
    }
    function getCSS() {
        var border = document.getElementById("borderID");
        // could do switch but nah
        output.innerText = "";
        if (inputTopLeft.value !== '') { // overwrite it as well, no duplicates
            output.innerText += "border-top-left-radius: ".concat(border.style.borderTopLeftRadius, ";\n");
        }
        if (inputTopRight.value !== "") {
            output.innerText += "border-top-right-radius: ".concat(border.style.borderTopRightRadius, ";\n");
        }
        if (inputBottomLeft.value !== '') {
            output.innerText += "border-bottom-left-radius: ".concat(border.style.borderBottomLeftRadius, ";\n");
        }
        if (inputBottomRight.value !== '') {
            output.innerText += "border-bottom-right-radius: ".concat(border.style.borderBottomRightRadius, ";\n");
        }
        if (inputEndEnd.value !== '') {
            output.innerText += "border-end-end-radius: ".concat(border.style.borderEndEndRadius, ";\n");
        }
        if (inputEndStart.value !== '') {
            output.innerText += "border-end-start-radius: ".concat(border.style.borderEndStartRadius, ";\n");
        }
        if (inputStartEnd.value !== '') {
            output.innerText += "border-start-end-radius: ".concat(border.style.borderStartEndRadius, ";\n");
        }
        if (inputStartStart.value !== '') {
            output.innerText += "border-start-start-radius: ".concat(border.style.borderStartStartRadius, ";\n");
        }
    }
    // change it, make it like that ohter wbsiste
    // empty the iputs on refresh
    // lil problem with styling
})();
