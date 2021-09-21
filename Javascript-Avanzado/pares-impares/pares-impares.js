// rango = Number(prompt("Cuantos numeros ingresaras?"));

// for (let i = 0; i < rango; i++) {
//   const numero = [Number(prompt("Ingresa el numero mayor?"))];

//   if (numero % 2 === 1) {
//     let impar = [];
//     impar.push(numero);
//     document.write(`Los numeros impares son ${impar}<br>`);
//     console.log(impar);
//     // console.log(i);
//     // console.log(impar[i]);
//   }
// }

let numeroMay = Number(prompt("Ingresa el numero mayor"));
let numeroMin = Number(prompt("Ingresa el numero menor"));

if(numeroMin < numeroMay){
  for (let i = numeroMin + 1; i < numeroMay; i++) {
    if (i % 2 !== 0) {
      document.write(`El numero ${i} es impar<br/>`);
    }else{
      document.write(`No hay numeros impares en el rango elegido`);
    }
  }
}