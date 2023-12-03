const prompt = require("prompt-sync")({ sigint: true })

function dolar (){
    let pesoMex, cambioDo
    const dolar=[18.6]

    pesoMex= parseInt(prompt("Ingrese la cantidad de pesos Mexicanos quiere cambiar a Dolar "))

    cambioDo= (pesoMex/dolar)
    console.log("De "+pesoMex+" pesos pasa a "+cambioDo+" Dolares");
}
console.log(dolar());