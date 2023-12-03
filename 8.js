const prompt = require("prompt-sync")({ sigint: true })

function minutos (){
    const pagoLlam=[3]
let llamada=parseInt(prompt("Cuantos minutos duro su llamada "))
let total=(llamada*pagoLlam)
console.log("De "+llamada+" minutos de llamada va a pagar "+total+ " pesos");

}
console.log(minutos());