const prompt = require("prompt-sync")({ sigint: true })

function cubo (){
    console.log("Cada metro cubico equivale a 150$");
let altura
let ancho
let largo
const pago=[150]
let metros

altura= parseInt(prompt("Ingrese la altura del cubo "))
largo= parseInt(prompt("Ingrese lo largo del cubo "))
ancho= parseInt(prompt("Ingrese la anchura del cubo "))

metros= (altura*ancho*largo)
let pagoM=metros*pago

console.log("El pago total de "+metros+" metros cubicos es de "+pagoM+" Pesos");


}
console.log(cubo());