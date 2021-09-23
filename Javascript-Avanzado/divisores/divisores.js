let numero = parseInt(prompt("Ingresa el numero"));
const num = numero;
while (numero > 0) {
  for (let i = numero; i > 0; i--) {
    if (num % i === 0) {
      // console.log(num%i);
      document.write(`Los divisores de ${num} son ${numero}<br/>`);
    }
    numero--;
  }
}
