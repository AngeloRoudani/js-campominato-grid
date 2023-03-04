/*1 eseguire un ciclo che crei 100 quadrati nel DOM alla classe grid
  2 assegno un numero a ogni cella
  3 creare un ascoltatore di eventi che assegni una classe bg color a un quadrato
   
*/

const buttonPlay = document.querySelector('.btn');
let gridDomEasy = document.querySelector('.grid_easy');
let gridDomHard = document.querySelector('.grid_hard');
let gridVeryHard = document.querySelector('.grid_very');


for (let i = 1; i <= 100; i++) {
    const easySquare = squareEasy();
    easySquare.append([i]);
    easySquare.addEventListener('click', 
        function() {
            this.classList.toggle('bg-yellow');
        }
    );
    gridDomEasy.append(easySquare);
}

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
}




buttonPlay.addEventListener('click', 
    
    function() {
        let battleMode = document.getElementById('mode').value;

        if (battleMode == "easy"){
            
            gridDomEasy.classList.toggle('hidden');

        } else if (battleMode == "hard") {
            
            gridDomHard.classList.toggle('hidden');

        } else if (battleMode == "very_hard"){
            
            gridVeryHard.classList.toggle('hidden');

        }
    }
)

function squareEasy () {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square_easy');
    return squareElement

}

function squareHard () {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square_hard')
    return squareElement

}

function squareVeryHard () {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square_very_hard')
    return squareElement

}




