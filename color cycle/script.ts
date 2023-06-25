(function() {
    const box = document.getElementsByClassName("box")[0] as HTMLDivElement;
    const btn = document.getElementById("fillBtnID") as HTMLButtonElement;
    const startingColor = document.getElementById("startingColorID") as HTMLInputElement;
    const encoding = document.getElementById("encodingID") as HTMLSelectElement;
    const interval = document.getElementById("intervalID") as HTMLInputElement;
    let increment = document.getElementsByClassName("increment") as HTMLCollectionOf<HTMLInputElement>;
    
    let on: boolean = true;

    btn.addEventListener("click", function() {
        if (on) {
            btn.innerText = "Stop";
            on = false;
        } else {
            btn.innerText = "Start";
            on = true;
        }
    })

    startingColor.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            validateInput();
            box.style.background = `#${startingColor.value}`;
        }
    })

    document.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            // check if the event targer if one of the increment inputs (event targer=element that triggered the event)
            if (Array.from(increment).includes(e.target)) {
                increment = Array.from(increment);
                incrementColor(increment[0], increment[1], increment[2]);
            }
        }
    })

    

    interval.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {

        }
    })

// VALIDATE 
    // i need to color to stay when refreshed


    function incrementColor(incrementRed, incrementBlue, incrementGreen) {
        let color = `#${startingColor.value}`;
        let red = color.substring(1, 3);
        let green = color.substring(3, 5);
        let blue = color.substring(5, 7);

        let decRR = parseInt(red, 16); // hex -> decimal
        let decGG = parseInt(green, 16);
        let decBB = parseInt(blue, 16);
        console.log(decRR)

        decRR += Number(incrementRed.value);
        decGG += Number(incrementGreen.value);
        decBB += Number(incrementBlue.value);
        
        decRR = Math.max(0, Math.min(decRR, 255));
        decGG = Math.max(0, Math.min(decGG, 255));
        decBB = Math.max(0, Math.min(decBB, 255));
        // instead of forEach
        

        const hexRR = decRR.toString(16).padStart(2, "0"); // dec -> hex
        const hexGG = decGG.toString(16).padStart(2, "0");
        const hexBB = decBB.toString(16).padStart(2, "0");

        console.log(hexRR);
        console.log(hexRR, hexGG, hexBB);
        color = `#${hexRR}${hexGG}${hexBB}`;
        box.style.background = color;
        // ori 0 rogor
        return { hexRR, hexBB, hexGG };
    }

    

















    //  ???????????????????

    function validateInput() {
        const hexCode = startingColor.value.trim();
        if (!/^[0-9A-Fa-f]{6}$/.test(hexCode)) {
          console.warn("Invalid hexadecimal color code!");
        }

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