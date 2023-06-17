(function () {
    document.getElementsByTagName("input")[0].addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            var input = document.getElementsByTagName("input")[0];
            var error = document.getElementById("errorID");
            error.innerText = "";
            inputValidation(input);
            input.value = "";
        }
    });
    function inputValidation(input) {
        // should only consist of 0s and 1s
        // if length = 0 or whitespaces, return nothing
        var validated = true;
        var error = document.getElementById("errorID");
        var numbers = "23456789";
        if (isNaN(input.value)) {
            error.innerText = "Letters are not allowed";
            error.style.display = "block";
            validated = false;
        }
        if (input.value.length === 0 || input.value.includes(' ')) {
            error.innerText = "Please enter valid binary number";
            error.style.display = "block";
            validated = false;
        }
        numbers.split("").forEach(function (number) {
            if (input.value.includes(number)) {
                error.innerText = "Please enter valid binary number";
                error.style.display = "block";
                validated = false;
            }
        });
        if (validated) {
            conversion(); // should be inside this function
        }
        function conversion() {
            var output = document.getElementById("outputID");
            var input = document.getElementsByTagName("input")[0];
            // take the input, make an array of 2**, reverse the input and make an array?
            // iterate through it and for each digit multiply it by 2**
            input = input.value.split("").reverse().join("");
            var powerOfTwos = [1, 2, 4, 8, 16, 32, 64, 128];
            var arrayOfNums = Array.from(input);
            var sum = 0;
            arrayOfNums.forEach(function (num, index) {
                sum += num * powerOfTwos[index];
            });
            output.innerText = "Decimal: " + sum;
        }
    }
})();
// or just use parseInt(binary, 2).....
