const nombre = prompt("Cual es tu nombre?: ");
const year   = parseInt(prompt("¿En que año naciste?: "));
const mes    = prompt("¿En qué mes naciste?");
const dia    = parseInt(prompt("¿En qué día naciste?"));

if (mes == "septiembre" && dia == 21) {
  document.write(`Feliz cumpleaños ${nombre}, tienes ${2021 - year} años`);
} else if (mes == "septiembre" && dia > 21) {
  document.write(
    `${nombre}, tienes ${2021 - year - 1} años y ya casi cumples ${2021 - year}`
  );
} else if (mes == "diciembre" || mes == "noviembre" || mes == "octubre") {
  document.write(`${nombre}, tienes ${2021 - year - 1} años`);
} else {
  document.write(`${nombre}, tienes ${2021 - year} años`);
}
