let btn = document.querySelector('button');
let body = document.querySelector('body');
let currColor = document.querySelector('#current-color');

// Adding functionality on clicking button
btn.addEventListener('click', function() {
    currColor.innerText = `Background Color : ${getColor()}`;
    body.style.backgroundColor = getColor();
})

// Function to generate random colors
function getColor() {
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);

    const randomColor = `rgb(${red}, ${green}, ${blue})`;
    return randomColor;
}