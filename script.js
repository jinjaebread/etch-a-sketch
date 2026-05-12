const divContainer = document.querySelector("div.container");
const body = document.querySelector("body");
const divBtn = document.createElement("div");
const gridBtn = document.createElement("button");

body.appendChild(divBtn);

const userPrompt = prompt("Please enter grid size:");
const gridSize = parseInt(userPrompt) * parseInt(userPrompt);
let basisValue = 100 / parseInt(userPrompt);

for (let i = 1; i <= gridSize; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    divContainer.appendChild(div);
    div.style.flex = "0 0 " + basisValue + "%";
    div.addEventListener("mouseover", (e) => {
        div.style.backgroundColor = "black";
    });
}
