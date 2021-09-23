/*  Arreglos
    Estructura de datos
*/

const arreglo = [];
const arreglo2 = new Array();

let lenguajes = [
  "Javascript",
  "Java",
  "PHP",
  "Python",
  "C#",
  "C++",
  "Scala",
  "Rust",
  "Ruby",
  "Cobol",
];

// forEach
document.write("<ol>");
lenguajes.forEach(function (lenguaje, index) {
  document.write(`<li>- ${lenguaje}</li>`);
});
document.write("</ol>");

// Map, crea un nuevo arreglo con los resultados

let numeros = Array(2, 3, 4, 27, 19, 12);
let numeros2 = numeros.map(function(numero){
  return numero * 2;
});
console.log(numeros);
console.log(numeros2);

// Includes determina si un arreglo contiene un valor
