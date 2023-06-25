(function () {
    var imgDiv = document.getElementById("imgDivID");
    var imgInput = document.getElementById("imageInputID");
    var btn = document.getElementById("displayBtnID");
    var errorSpan = document.getElementById("errorID");
    var right = document.getElementById("rightID");
    var left = document.getElementById("leftID");
    var up = document.getElementById("upID");
    var down = document.getElementById("downID");
    btn.addEventListener("click", function () {
        loadImage(imgInput.value, function (url) {
            imgDiv.style.backgroundImage = "url(".concat(imgInput.value, ")"); // ?
        }, function (error) {
            errorSpan.innerText = String(error);
        });
    });
    right === null || right === void 0 ? void 0 : right.addEventListener("click", function () {
        imgDiv.style.transform = "scaleX(1)";
    });
    left === null || left === void 0 ? void 0 : left.addEventListener("click", function () {
        imgDiv.style.transform = "scaleX(-1)";
    });
    down === null || down === void 0 ? void 0 : down.addEventListener("click", function () {
        imgDiv.style.transform = "scaleY(-1)";
    });
    up === null || up === void 0 ? void 0 : up.addEventListener("click", function () {
        imgDiv.style.transform = "scaleY(1)";
    });
    function loadImage(url, successCallback, errorCallback) {
        var img = new Image(); // what
        img.onload = function () {
            successCallback(url);
        };
        img.onerror = function () {
            errorCallback(new Error('Image not found'));
        };
        img.src = url; // ?
    }
    // write an if else statement that validates user's input
})();
