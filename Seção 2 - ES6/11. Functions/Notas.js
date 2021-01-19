/* Fuctions! */

/* Named Function | Função com nome */
function soma1(x, y){
    return x + y;
};

/* anonymous function | Função anônima */
var soma2 = function (x, y) {
    return x + y;
}

/* ----------------/ ES6 /------------------ */

const soma3 = (x, y) => {
    return x + y;
}

const soma4 = (x, y) => x + y; 

//console.log(coma4(10, 5))


const array = [1, 2, 3, 4, 5].map(function(x) {
    return x * 10;
});

const arraySimplificado = [1, 2, 3, 4, 5].map((x) => x * 10) // Quando só tem um parâmetro não precisa das () no "x"
// .map() => passa uma função de callback para a função de map e ela executa ela passando cada elemento do array 

console.log(array)
