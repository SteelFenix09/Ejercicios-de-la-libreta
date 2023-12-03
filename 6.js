const prompt = require("prompt-sync")({ sigint: true })

function elec (){
    const pagoKilo=[0.025]
let kilo=parseInt(prompt("Cuantos killowats a conusmido en usuario "))
let total=(kilo*pagoKilo)
console.log("De "+kilo+" KiloWats va a pagar "+total);

}
console.log(elec());