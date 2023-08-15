
const container = document.querySelector('.container');


function CreateGrid(length){
    sizeSquared = length * length
    for (let i = 0; i<(sizeSquared); i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        console.log(i);
    }
}

size = 16

CreateGrid(size);
