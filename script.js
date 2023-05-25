const bigBox = document.querySelector("#canvas");

for (let i = 0; i < 16; i++) {

    let row = document.createElement("div");
    row.classList.add("row");

    for (let j = 0; j < 16; j++) {
        let smallBox = document.createElement("div");    
        smallBox.classList.add("col");
        row.append(smallBox);
    }

    bigBox.append(row);
}

const boxes = document.getElementsByClassName("col");

for (let i = 0; i < boxes.length; i++) {
    boxes[i].addEventListener("mouseover", function(e) {
        console.log(e);
        this.classList.add("drawn");
    });
}
