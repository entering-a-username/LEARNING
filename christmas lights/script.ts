(function() {

    const startStopBtn = document.getElementById("startStopBtnID") as HTMLButtonElement;
    
    const runBtn = document.getElementById("runBtnID") as HTMLButtonElement;
    const element = document.getElementById("elementNumberID") as HTMLInputElement;
    const colorInput = document.getElementById("colorInputID") as HTMLInputElement;
    const intensity = document.getElementById("intensityID") as HTMLInputElement;
    const width = document.getElementById("widthID") as HTMLInputElement;
    const height = document.getElementById("heightID") as HTMLInputElement;
    const rows = document.getElementById("rowNoID") as HTMLInputElement;
    const lights = document.getElementsByTagName("li") as HTMLCollectionOf<HTMLElement>;

    // give them the default color
    // give colors with js? bc css too long
    // maybe the color/etfc inputs need button as well?
    // keydown will be the event

    let on: boolean = false;

    startStopBtn.addEventListener("click", function() {
        if (on) {
            removeLights();
        } else addLights(); // not working without else?
    })
    // style inputs

    runBtn.addEventListener("click", function() {
        if (on) {
            changeSpeed();
        }
    })

    element.addEventListener("keydown", function() {

        let el = lights[2 * Number(element.value) - 1];
        

        
    })

    colorInput.addEventListener("change", function() {
        
        
    })


    // should be able to do this stuff on all rows
    rows.addEventListener("keydown", function(e) {
        const extraRow = document.getElementsByClassName("extra-row")[0] as HTMLDivElement;
        const oneRow = document.getElementsByClassName("one-row")[0] as HTMLDivElement;
        const div = document.createElement("div");
        const thisDiv = div.append(oneRow)

        if (e.key === "Enter") {
            for (let i = 0; i < Number(rows.value); i++) {
                extraRow.insertBefore(thisDiv, oneRow);
                
            }
        }
    })


    function addLights() {
        on = true;
        startStopBtn.innerText = "Stop";

        for (let i = 0; i < lights.length; i++) {
            if (i % 2 !== 0) {
                lights[i].classList.add(`shadow-animation-${i}`);  
            }
        }
    }

    function removeLights() {
        on = false;
        startStopBtn.innerText = "Start";

        for (let i = 0; i < lights.length; i++) {
            if (i % 2 !== 0) {
                lights[i].classList.remove(`shadow-animation-${i}`);
            }
        }
    }


    function changeSpeed() {
        const speed = document.getElementById("speedID") as HTMLInputElement;
        
        for (let i = 0; i < lights.length; i++) {
            if (i % 2 !== 0 && speed.value > 0) {
                lights[i].style.animationDuration = `${speed.value}s`;
            }
        }

        // refresh when turned off

        // if speed.value === 0?
    }

    function changeColor(elNum, color) {
        elNum.style.backgroundColor = color.value;
    }





})();