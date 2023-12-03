const prompt = require("prompt-sync")({ sigint: true })


function pago(){
    let pasajero, destino
    const distancia=[113]
    const kilometro=[3]

    pasajero=prompt("Ingrese su primer nombre ")
    destino=prompt("Ingrese el destino donde se dirije ")

    let total=(kilometro*distancia)
    console.log("Bienvenido "+pasajero+" para "+destino+" son "+distancia+" Kilometros y va a pagar "+total+" Pesos");
}
console.log(pago());
