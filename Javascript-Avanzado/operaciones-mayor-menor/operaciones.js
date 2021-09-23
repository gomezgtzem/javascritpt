num1 = Number(prompt("Cual es tu primer numero?: "));
num2 = Number(prompt("Cual es tu segundo numero?: "));

if (isNaN(num1) || isNaN(num2) || num1 === num2) {
  document.write(`Campos no validos`);
}else if(num1 > num2){
  document.write(`La suma es: ${num1+num2}<br/>`);
  document.write(`La resta es: ${num1-num2}`);
}else{
  document.write(`El producto es: ${num1*num2}<br/>`);
  document.write(`La division es: ${num1/num2}`);
}

// document.write(isNaN(num1)||isNaN(num2) ?  num1 === num2 : "Campos no validos");