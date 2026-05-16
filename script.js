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

    divContainer.replaceChildren();

    /*generate thy grid*/
    for (let i = 1; i <= gridSize; i++) {
        const div = document.createElement("div");
        div.classList.add("box");
        divContainer.appendChild(div);
        div.style.flex = "0 0 " + basisValue + "%";
        div.addEventListener("mouseover", (e) => {
            div.style.backgroundColor = "black";
        });
    }   
});




