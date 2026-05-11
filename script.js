//Webpage w/ 16x16 grid of square divs as initial
//Total of 256 div.box within the div.container
//Looks like we need to have a button that clears the grid and prompts user for desired box amount
//div.container needs to stay 960px wide and tall

const divContainer = document.querySelector("div.container");
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
