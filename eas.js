const gridContainer = document.querySelector('.container');
const divButton = document.querySelector('.createDiv');

function check(e) {
    e.stopPropagation();
    this.classList.add('paint');
}


// Attaching event listeners after the creation of divs.
function hover() {
    const b = document.querySelectorAll('.box');
    b.forEach(box => box.addEventListener('mouseover', check, ));
}

divButton.addEventListener('click', divBoxes, {once: true}); // Button to create 16x16 grid of divs only works once

function divBoxes() {
    for(i = 1; i <= 16*16; i++) {
        const div = document.createElement('div');
        div.classList.add('box');
        gridContainer.appendChild(div);
    }
    // Calls a function to add eventlisteners after the creation of divs / squares
    hover();
}



// function makeDiv() {
//     const div = document.createElement('div');
//     for (i = 0; i < 16*16; i++) {
//         gridContainer.div;
//     }
// }

// ^ Testing function to create a 16x16 grid

// Create multiple divs with similar classes
// Experimented with creating boxes, except the first one to have a different class.

// function divBoxes() {
//         for(i = 1; i <= 16*16; i++) {
//             if(i == 1) {
//                 const div = document.createElement('div');
//                 div.textContent = `${i}`;
//                 div.classList.add(`box1`);
//                 gridContainer.appendChild(div);
//             } else if (i !== 1) {
//                 const div = document.createElement('div');
//                 div.textContent = `${i}`;
//                 div.classList.add(`box`);
//                 gridContainer.appendChild(div);
//             } else {
//                 return;
//             }
//         }
//     }