const prompt = require("prompt-sync")({ sigint: true })

function tela (){
    let metros, pedir
    const pulgada=[0.0254]

    metros = parseInt(prompt("Cuantos metros quiere combertir a pulgadas "))
    pedir= (metros/pulgada)

    console.log("Va a pedir "+pedir+" pulgadas de tela");
}
console.log(tela());