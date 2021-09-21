// alert('Template string');
const nombre = prompt("Cual es tu nombre?: ");
const edad = prompt("Cual es tu edad?: ");

console.log("Hola " + nombre + ", bienvenido. Tienes " + edad + " años");

const saludo = `<h1>Hola ${nombre}, saludos. Tienes ${edad} años</h1>`;
document.write(saludo);
