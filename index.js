// Your code here
const dodger = document.getElementById('dodger');
function moveDodgerLeft(){    
    const newNumber = dodger.style.left.replace("px", " ");
    const left = parseInt(newNumber, 10);
    dodger.style.left = `${left - 1}px`;

}

function moveDodgerRight(){
    const newNumber = dodger.style.left.replace("px", " ");
    const left = parseInt(newNumber, 10);
    dodger.style.left = `${left + 1}px`;
}