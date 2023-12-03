const prompt = require("prompt-sync")({ sigint: true })

function milk (){
    const galon=[8.785]
    let pagoGalon
    let litro

    litro = parseInt(prompt("Cualtos litros de leche produce al dia "))
    let combertir=(litro/galon)
    pagoGalon=combertir*150

    console.log("El pago a recir es "+pagoGalon+" Pesos");

}
console.log(milk());