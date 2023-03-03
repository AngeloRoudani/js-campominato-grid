/*1 eseguire un ciclo che crei 100 quadrati nel DOM alla classe grid
  2 assegno un numero a ogni cella
  3 creare un ascoltatore di eventi che assegni una classe bg color a un quadrato
   
*/

const buttonPlay = document.querySelector('.btn')
const provaB = document.querySelector('grid');
provaB = createSquareGrid(provaB, 1, 100);
console.log(provaB);
let battleMode = document.getElementById('mode').value

buttonPlay.addEventListener('click', 
    
    function() {
        let battleMode = document.getElementById('mode').value
        let myGrid = document.querySelector('.grid');

        if (battleMode == "easy"){
            myGrid = createSquareGrid(1 , 100);
            myGrid.classList.remove('hidden');
        } else if (battleMode == "hard") {
            myGrid = createSquareGrid(1 , 81);
            myGrid.classList.remove('hidden');
        } else if (battleMode == "very_hard"){
            myGrid = createSquareGrid(1 , 49);
            myGrid.classList.remove('hidden');
        }
    }
)

function createSquareGrid (gridDom, min, max) {
    
    for ( let i = min; i <= max; i++) {
        const squareElement = document.createElement('div');
        squareElement.classList.add('square');
        squareElement.append([i]);
    
        squareElement.addEventListener('click',
            function() {
                squareElement.classList.toggle('bg-yellow');
                console.log([i]);
            }
        )
        gridDom.append(squareElement);
    }
    

}




