// Solicitar número al usuario, mostrar la suma y la media de los números introducidos
// hasta introducir un número negativo y ahi mostrar el resultado

let nums  = [];
let suma  = 0;
let media = 0;
let num   = parseInt(prompt("Ingresa un numero: "));

while (num>0) {
  suma=0;
  media=0;
  nums.push(num);
  for(let i=0; i<nums.length;i++){
  suma = suma+nums[i];
  console.log(nums[i]);
  }
  media= suma/nums.length;
  document.write(`La suma es ${suma}<br/>`);
  document.write(`La media es ${media}<br/>`);
  num = parseInt(prompt("Ingresa un numero: "));
}
