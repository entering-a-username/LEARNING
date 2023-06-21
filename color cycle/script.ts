(function() {

    const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    const btn = document.getElementById("fillBtnID") as HTMLButtonElement;
    const startingColor = document.getElementById("startingColorID") as HTMLInputElement;
    const encoding = document.getElementById("encodingID") as HTMLSelectElement;
    const incrementRed = document.getElementById("incrementRedID") as HTMLInputElement;
    const incrementGreen = document.getElementById("incrementGreenID") as HTMLInputElement;
    const incrementBlue = document.getElementById("incrementBlueID") as HTMLInputElement;
    const interval = document.getElementById("intervalID") as HTMLInputElement;

    let color = `#${startingColor.value}`;
    let on: boolean = false;

    btn.addEventListener("click", function() {
        if (on) {

        }
    })

    startingColor.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            validateInput();
            box.style.background = color;
        }
    })

    incrementRed.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            let incr = incrementRed.value;
            console.log(incr);
            
        }
    })

    incrementGreen.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            let incr = incrementGreen.value;
            console.log(incr);
            
        }
    })

    incrementBlue.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            let incr = incrementBlue.value;
            console.log(incr);
            
        }
    })

    interval.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {

        }
    })

// VALIDATE 
    // i need to color to stay when refreshed


    function incrementColor() {
        
    }
    
    //  ???????????????????

    function validateInput() {
        let letters: string = 'ghijklmnopqrstuvwxyz';
        let validated: boolean = true;

        letters.split("").forEach(letter => {
            if (startingColor.value.includes(letter)) {
                validated = false;
                
            }
        })

        if (validated) {
            return true;
        }
    }

})();