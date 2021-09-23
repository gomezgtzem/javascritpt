// const edad = parseInt(prompt("Ingresa tu edad"));
// let mensaje = "";

// switch (edad) {
//   case 18:
//     mensaje = "Acaba de cumplir la mayoria de edad";
//     break;

//   case 25:
//     mensaje = "Ya eres un adulto";
//     break;

//   case 70:
//     mensaje = "Ya eres de la tercera edad";
//     break;

//   default:
//     mensaje = "Edad no clasificada";
//     break;
// }
// document.write(mensaje);

const nombre = prompt("Ingresa tu nombre");
let mensaje = ''

switch(nombre.toLowerCase()){
  case 'emmanuel':
    mensaje = 'Eres administrador';
    break;
  default:
    mensaje = 'No te conozco';
    break;
}
document.write(`Hola ${nombre}. ${mensaje}`);