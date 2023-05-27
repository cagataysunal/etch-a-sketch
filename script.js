const bigBox = document.querySelector("#canvas");
const boxes = document.getElementsByClassName("col");

function createBox(sideLength) {
    bigBox.textContent = "";

    for (let i = 0; i < sideLength; i++) {

        let row = document.createElement("div");
        row.classList.add("row");

        for (let j = 0; j < sideLength; j++) {
            let smallBox = document.createElement("div");    
            smallBox.classList.add("col");
            row.append(smallBox);
        }

        bigBox.append(row);
    }

    for (let i = 0; i < boxes.length; i++) {
        boxes[i].addEventListener("mouseover", function(e) {
            console.log(e);
            this.classList.add("drawn");
        });
    }
}

createBox(16);



const boxButton = document.querySelector("#reset-canvas");

boxButton.addEventListener("click", function(e) {
    let squareNumber = +prompt("How many squares per side?");
    if (squareNumber == null) {
        return;
    }
    number = number > 100 ? 100 : number;
    createBox(number);
});
