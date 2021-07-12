const gridContainer = document.querySelector('.container');
const slider = document.querySelector('.slider');
const sliderContainer = document.querySelector('.centerSlider');
const newGrid = document.querySelector('.clear');
const pSliderValue = document.querySelector('.sliderValue');
const p = document.createElement('p');
let range = 0;

// Creates paragraphs to hold live Grid and Slider values
function createGridValue() {
    if(sliderContainer.p == undefined){
        sliderContainer.insertBefore(p, slider);
        p.classList.add('size');
    } else {
        return;
    }
}


// Clear button; Clears grid and prompts for a new N x N grid to be created
newGrid.addEventListener('click', createGrid);

function createGrid() {

    createGridValue();
    resetGrid();
    const pGridValue = document.querySelector('.size');

    let newRange = prompt("Please enter a number equal to or under 50 for new grid: ");
    range = newRange;
    if(range <= 50) {
        pSliderValue.textContent = `${range}`;
        pGridValue.textContent = `${range} x ${range}`;
        gridContainer.style.gridTemplateColumns = `repeat(${range}, 1fr)`;
        gridContainer.style.gridTemplateRows = `repeat(${range}, 1fr)`;
        divBoxes(range);
    } else {
        return alert("That number is too high! Try again.");
    }

}

// Separate function that just resets the grid
function resetGrid() {
    const divs = document.querySelectorAll('.squares');
    divs.forEach(divs => divs.parentNode.removeChild(divs));
}

// Creates div squares with the range input for a total of range*range divs
function divBoxes(x) {
    for(i = 1; i <= x*x; i++) {
        const div = document.createElement('div');
        div.classList.add('squares');
        gridContainer.appendChild(div);
    }
    // Calls a function to add eventlisteners after the creation of divs / squares
    hover();
}


// Live updates the value of the slider and displays it
slider.addEventListener('mousemove', updateValue);
pSliderValue.textContent = slider.value;

function updateValue() {
    pSliderValue.textContent = `${slider.value}`;
}


// Updates text which represents slider value
// Also pre-sets the grid to desired dimensions

slider.addEventListener('change', rangeValue);

function rangeValue() {

    createGridValue();
    resetGrid();
    const pGridValue = document.querySelector('.size');

    pGridValue.textContent = `${slider.value} x ${slider.value}`;
    range = slider.value;
    gridContainer.style.gridTemplateColumns = `repeat(${range}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${range}, 1fr)`;
    divBoxes(range);
}

// Add event listener for Slider to display value which updates
// a paragraph created above it as the input changes


function colorMe(e) {
    e.stopPropagation();
    this.classList.add('paint');
}


// Attaching event listeners after the creation of divs.
function hover() {
    const divs = document.querySelectorAll('.squares');
    divs.forEach(squares => squares.addEventListener('mouseover', colorMe));
}

