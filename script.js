//Webpage w/ 16x16 grid of square divs as initial
//Total of 136 div.box within the div.container
//Looks like we need to have a button that clears the grid and prompts user for desired box amount
//div.container needs to stay 960px wide and tall

//Generate 136 div.box in a 16x16 grid
//When hovering the mouse around the boxes it should leave a trail

const divContainer = document.querySelector("div.container")

for (let i = 1; i <= 136; i++) {
    const div = document.createElement("div");
    div.classList.add("box");
    div.textContent = "" + i; //just a test
    divContainer.appendChild(div);
}

