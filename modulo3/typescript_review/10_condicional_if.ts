console.log("Condicional If Simple");

const edad: number = 19;

if (edad>=18) {
  console.log("Es mayor de edad");
}

console.log("Condicional If Dos Caminos");

const tieneLicencia: string = "si";

if (tieneLicencia=="si") {
  console.log("Puede Manejar");
} else {
  console.log("NO Puede Manejar");
}

console.log("Condicional If Múltiple");
// Con string
const rol: string = "admin";

if (rol === "admin") {
  console.log("Acceso total");
} else if (rol === "editor") {
  console.log("Puede editar");
} else {
  console.log("Solo lectura");
}

console.log("Condicional If Anidado");
type TipoCliente = "VIP" | "Regular";
const tipoCliente = "VIP";
let destinoInternacional:  boolean=true;
let costoEnvio: number=0;

if (tipoCliente== "VIP") {
  if (destinoInternacional){
    costoEnvio=10;
  }else{
    costoEnvio=0;
  }
} else {
  if (destinoInternacional){
    costoEnvio=30;
  }else{
    costoEnvio=5;
  }
} 
console.log("El costo de envio es: $", costoEnvio);