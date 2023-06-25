(function() {
  const imgDiv = document.getElementById("imgDivID") as HTMLDivElement;
  const imgInput = document.getElementById("imageInputID") as HTMLInputElement;
  const btn = document.getElementById("displayBtnID") as HTMLButtonElement;
  const errorSpan = document.getElementById("errorID") as HTMLSpanElement;
  const right = document.getElementById("rightID");
  const left = document.getElementById("leftID");
  const up = document.getElementById("upID");
  const down = document.getElementById("downID");

  btn.addEventListener("click", function() {
      loadImage(
          imgInput.value,
          (url) => {
            imgDiv.style.backgroundImage = `url(${imgInput.value})`; // ?
          },
          (error) => {
            errorSpan.innerText = String(error);
          }
        );
  });

  right?.addEventListener("click", function() {
    imgDiv.style.transform = `scaleX(1)`;
  });

  left?.addEventListener("click", function() {
    imgDiv.style.transform = `scaleX(-1)`;
  });

  down?.addEventListener("click", function() {
    imgDiv.style.transform = `scaleY(-1)`;
  });

  up?.addEventListener("click", function() {
    imgDiv.style.transform = `scaleY(1)`;
  });

  function loadImage(url: string, successCallback: (url: string) => void, errorCallback: (error: Error) => void): void {
      const img = new Image(); // what
      img.onload = () => {
        successCallback(url);
      };
      img.onerror = () => {
        errorCallback(new Error('Image not found'));
      };
    
      img.src = url; // ?
    }
    
    // write an if else statement that validates user's input


})();