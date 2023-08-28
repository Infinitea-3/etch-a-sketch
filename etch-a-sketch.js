const container = document.querySelector('.container');
const cellColor = document.getElementById('colorpicker');

//Fill Grid With Cells, Cells Change Color on Press + Mouse Over
fillGrid=(length)=>{
    removeAllChildNodes(container);
    fullSize = length * length;
    for (let i = 0; i<fullSize; i++){
        const grid = document.createElement('div');
        grid.classList.add('grid');
        container.appendChild(grid);
        grid.addEventListener("mousedown",(_)=>{clicked = true})
        grid.addEventListener("mouseup",(_)=>{clicked = false})
        grid.addEventListener("mousemove",function(){
            if(!clicked){
                return
            }
            grid.style.backgroundColor = cellColor.value;
        })
    }
    document.getElementById('container').style.gridTemplateColumns = `repeat(${length}, 1fr)`;
    document.getElementById('container').style.gridTemplateRows = `repeat(${length}, 1fr)`;
}

//Remove All Child Nodes From Grid
function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

//Slider To Change Number Of Squares In Grid
const slider = document.querySelector('.slider');
slider.addEventListener('input',function(){
    const rangeValue = document.getElementById('rangeValue');
    rangeValueText = parseInt(rangeValue.textContent);
    fillGrid(rangeValueText);
});

//Button To Reset (If No Change Has Been Made To Slider, Reset To 20x20)
document.getElementById('resetButton').onclick = function(){
    const rangeValue = document.getElementById('rangeValue');
    rangeValueText = parseInt(rangeValue.textContent);
    if(isNaN(rangeValueText) == true){
        rangeValueText = 20;
    }
    fillGrid(rangeValueText);
};

//Create Initial Grid
size = 20;
fillGrid(size);

