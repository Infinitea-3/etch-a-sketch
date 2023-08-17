const container = document.querySelector('.container');

createGrid=()=>{
    for (let i = 0; i<256; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        console.log(i);
    }
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}


const slider = document.querySelector('.slider');
const rangeValue = document.querySelector('#rangeValue');
slider.addEventListener('input',function(){
    removeAllChildNodes(container);
    console.log(rangeValue);
    container.setAttribute('style', `grid-template: repeat(${rangeValue},2fr)/repeat(${rangeValue},2fr);`);
    for (let i=0; i<rangeValue*rangeValue;i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        console.log(i);
    }
});

createGrid();