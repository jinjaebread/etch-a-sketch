const divContainer = document.querySelector("div.container");
const gridBtn = document.querySelector("button");

gridBtn.addEventListener("click", (e) => {
    let userPrompt = prompt("Please enter grid size:");
    let num = parseInt(userPrompt);
    let gridSize = num * num;
    let basisValue = 100 / num;

    /*check if user inputs crazy stuff*/
    while (num <= 0 || num > 100 || isNaN(num)) {
        userPrompt = prompt("Please enter grid size:");
        num = parseInt(userPrompt);
        gridSize = num * num;
        basisValue = 100 / num;
    }

    /*this allows us to clear the grid for new grid*/
    divContainer.replaceChildren();

    /*generate thy grid*/
    for (let i = 1; i <= gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("box");
        divContainer.appendChild(div);
        div.style.flex = "0 0 " + basisValue + "%";

        let opacityValue = 0.1;
        let opacity = 0;

        div.addEventListener("mouseover", (e) => {
            /*div.style.backgroundColor = "black";*/
            let randRgbOne = Math.floor(Math.random() * 256);
            let randRgbTwo = Math.floor(Math.random() * 256);
            let randRgbThree = Math.floor(Math.random() * 256);
            div.style.backgroundColor = "rgb(" + randRgbOne + ", " + randRgbTwo + ", " + randRgbThree + ")";
            
            opacity = opacity + opacityValue;
            div.style.opacity = opacity;
        });
    }   
});
