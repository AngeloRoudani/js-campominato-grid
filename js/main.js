/*1 eseguire un ciclo che crei 100 quadrati nel DOM alla classe grid
  2 assegno un numero a ogni cella
  3 creare un ascoltatore di eventi che assegni una classe bg color a un quadrato
   
*/


const gridDom = document.querySelector('.grid');

for ( let i = 1; i <= 100; i++) {
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
console.log(gridDom);


const buttonPlay = document.querySelector('.btn')

buttonPlay.addEventListener('click', 
    
    function() {
        gridDom.classList.remove('hidden');
    }
)




