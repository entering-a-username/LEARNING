(function() {

    const border = document.getElementById("borderID") as HTMLDivElement;
    let inputTopLeft = document.getElementById("inputTopLeftID") as HTMLInputElement;
    let inputTopRight = document.getElementById("inputTopRightID") as HTMLInputElement;
    let inputBottomLeft = document.getElementById("inputBottomLeftID") as HTMLInputElement;
    let inputBottomRight = document.getElementById("inputBottomRightID") as HTMLInputElement;
    let inputEndEnd = document.getElementById("inputEndEndID") as HTMLInputElement;
    let inputEndStart = document.getElementById("inputEndStartID") as HTMLInputElement;
    let inputStartEnd = document.getElementById("inputStartEndID") as HTMLInputElement;
    let inputStartStart = document.getElementById("inputStartStartID") as HTMLInputElement;
    
    let inputArr = document.getElementsByTagName("input") as HTMLCollectionOf<HTMLInputElement>;
    const btn = document.getElementById("btnID") as HTMLButtonElement;
    let output = document.getElementById("outputID") as HTMLDivElement;
    inputArr = Array.from(inputArr);

    inputArr.forEach((input) => {
        input.addEventListener("input", function() {
          main(input);
        });
        // the event listener for input event is added to each input field. this event is triggered whenever the input value changes, even without pressing enter.
      
        input.addEventListener("keydown", function(e) {
          if (e.key === "Enter") {
            getCSS();
          }
        });
    });

    btn?.addEventListener("click", function() {
        copyCode();
        console.log("f");
        
    });

    function copyCode() {
        let output: any = document.getElementById("outputID") as HTMLInputElement;
        output.focus();
        output.select();

        try {
            let successful = document.execCommand("copy");
            let msg = successful ? "successful" : "unsuccessful";
            console.log("tes");
            
        } catch (err) {console.log("no");}
    }
      
    function main(input) {
        const border = document.getElementById("borderID") as HTMLDivElement;
        const borderClass = document.querySelector("borderClass") as HTMLDivElement;
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
        const border = document.getElementById("borderID") as HTMLDivElement;

        // could do switch but nah
        output.innerText = "";
        if (inputTopLeft.value !== '') { // overwrite it as well, no duplicates
            output.innerText += `border-top-left-radius: ${border.style.borderTopLeftRadius};\n`
        }
        if (inputTopRight.value !== "") {
            output.innerText += `border-top-right-radius: ${border.style.borderTopRightRadius};\n`
        }
        if (inputBottomLeft.value !== '') {
            output.innerText += `border-bottom-left-radius: ${border.style.borderBottomLeftRadius};\n`
        }
        if (inputBottomRight.value !== '') {
            output.innerText += `border-bottom-right-radius: ${border.style.borderBottomRightRadius};\n`
        }
        if (inputEndEnd.value !== '') {
            output.innerText += `border-end-end-radius: ${border.style.borderEndEndRadius};\n`
        }
        if (inputEndStart.value !== '') {
            output.innerText += `border-end-start-radius: ${border.style.borderEndStartRadius};\n`
        }
        if (inputStartEnd.value !== '') {
            output.innerText += `border-start-end-radius: ${border.style.borderStartEndRadius};\n`
        }
        if (inputStartStart.value !== '') {
            output.innerText += `border-start-start-radius: ${border.style.borderStartStartRadius};\n`
        }



    }


    // change it, make it like that ohter wbsiste

// empty the iputs on refresh
// lil problem with styling
})();