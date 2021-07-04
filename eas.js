const gridContainer = document.querySelector('.container');
const divButton = document.querySelector('.createDiv');

divButton.addEventListener('click', divBoxes, {once: true}); // Button to create 16x16 grid of divs only works only once

function divBoxes() {
    for(i = 1; i <= 16*16; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        gridContainer.appendChild(div);
    }
    // Calls a function to add eventlisteners after the creation of divs / squares
    hover();
}


function colorMe(e) {
    e.stopPropagation();
    this.classList.add('paint');
}


// Attaching event listeners after the creation of divs.
function hover() {
    const b = document.querySelectorAll('.box');
    b.forEach(box => box.addEventListener('mouseover', colorMe));
}

