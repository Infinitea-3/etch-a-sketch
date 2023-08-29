const container = document.querySelector('.container');

//Get A Random Color (For Disco Mode Only)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Fill Grid With Cells, Cells Change Color on Press + Mouse Over
fillGrid=(length)=>{
    let clicked = false;
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
            //Random Color If Disco Mode, Selected Color If Not
            if (discoMode){
                console.log(getRandomColor());
                grid.style.backgroundColor = getRandomColor();
            }
            else{
                const cellColor = document.getElementById('colorpicker');
                console.log(cellColor.value);
                grid.style.backgroundColor = cellColor.value;
            }
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

//Button For Disco Mode
let discoMode = false;
const buttonPressed = (e)=>{
    e.target.classList.toggle("active");
    discoMode = !discoMode
}
const discoButton = document.getElementById("discoButton");
discoButton.addEventListener("click", buttonPressed);

//Create Initial Grid
let size = 20;
fillGrid(size);

