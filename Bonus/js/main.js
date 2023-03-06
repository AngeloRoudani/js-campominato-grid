/*1 eseguire un ciclo che crei 100 quadrati nel DOM alla classe grid
  2 assegno un numero a ogni cella
  3 creare un ascoltatore di eventi che assegni una classe bg color a un quadrato
   
*/

const buttonPlay = document.querySelector('.btn');
let gridDomEasy = document.querySelector('.grid_easy');
let gridDomHard = document.querySelector('.grid_hard');
let gridVeryHard = document.querySelector('.grid_very');


let easySquare = squareEasy();
console.log(easySquare);
let hardSquare = squareHard();
let verySquare = squareVeryHard();



/*for (let i = 1; i <= 100; i++) {
    const easySquare = squareEasy();
    easySquare.append([i]);
    easySquare.addEventListener('click', 
        function() {
            this.classList.toggle('bg-yellow');
        }
    );
    gridDomEasy.append(easySquare);
}

console.log(gridDomEasy);

for (let i = 1; i <= 81; i++) {
    const hardSquare = squareHard();
    hardSquare.append([i]);
    hardSquare.addEventListener('click', 
        function() {
            this.classList.toggle('bg-yellow');
        }
    );
    gridDomHard.append(hardSquare);
}

for (let i = 1; i <= 49; i++) {
    const verySquare = squareVeryHard();
    verySquare.append([i]);
    verySquare.addEventListener('click', 
        function() {
            this.classList.toggle('bg-yellow');
        }
    );
    gridVeryHard.append(verySquare);
}*/




buttonPlay.addEventListener('click', 
    
    function() {
        let battleMode = document.getElementById('mode').value;

        if (battleMode == "easy") {
            squareGeneratorGrid(gridDomEasy, 1, 100, easySquare);
            gridVeryHard.classList.add('hidden');
            gridDomEasy.classList.remove('hidden');
            gridDomHard.classList.add('hidden');

        } else if (battleMode == "hard") {
            squareGeneratorGrid(gridDomHard, 1, 81, hardSquare);
            gridDomEasy.classList.add('hidden');
            gridVeryHard.classList.add('hidden');
            gridDomHard.classList.remove('hidden');

        } else if (battleMode == "very_hard"){
            squareGeneratorGrid(gridVeryHard, 1, 49, verySquare);
            gridDomEasy.classList.add('hidden');
            gridDomHard.classList.add('hidden');
            gridVeryHard.classList.remove('hidden');

        }
    }
)

function squareEasy () {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square_easy');
    return squareElement;

}

function squareHard () {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square_hard');
    return squareElement;

}

function squareVeryHard () {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square_very_hard');
    return squareElement;

}

function squareGeneratorGrid (gridDomPlace, min, max, squareFunction) {

    let i = min;
    
    while ( i <= max) {
        let squareCell = squareFunction;
        squareCell.innerHTML =`<div class="number">${i}</div>`;
        squareCell.addEventListener('click', 
            function() {
                this.classList.toggle('bg-yellow');
            }
        );
        gridDomPlace.append(squareCell);
        i++;
        
    }
}




