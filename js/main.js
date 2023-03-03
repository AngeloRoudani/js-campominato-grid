/*1 eseguire un ciclo che crei 100 quadrati nel DOM alla classe grid
  2 creare una funzione che assegni un numero a ogni cella
  3 creare una funzione che assegni una classe bg color a un quadrato
  4 creare un ascoltatore di eventi che assegni la funzione bg-color al click e stampi in console il numero assegnato 
*/


const gridDom = document.querySelector('.grid');

for ( let i = 1; i <= 100; i++) {
    const squareElement = document.createElement('div');
    squareElement.classList.add('square');
    gridDom.append(squareElement);
}

const buttonPlay = document.querySelector('.btn')

buttonPlay.addEventListener('click', 
    
    function() {
        gridDom.classList.remove('hidden')
    }
)