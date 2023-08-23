const container = document.querySelector('.container');

fillGrid=(length)=>{
    removeAllChildNodes(container);
    fullSize = length * length;
    for (let i = 0; i<fullSize; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
    }
    document.getElementById('container').style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    document.getElementById('container').style.gridTemplateRows = `repeat(${length}, 1fr)`;
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

const slider = document.querySelector('.slider');
slider.addEventListener('input',function(){
    const rangeValue = document.getElementById('rangeValue');
    rangeValueText = parseInt(rangeValue.textContent);
    fillGrid(rangeValueText);
});

//Create Initial Grid
size = 20;
fillGrid(size);