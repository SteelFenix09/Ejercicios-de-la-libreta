const prompt = require("prompt-sync")({ sigint: true })

function contratar (){
    const añoActual=[2023]
    const edad=[18]
    let año, saber

    año= parseInt(prompt("Cual es su año de nacimiento "))
    saber=(añoActual-año)

    if (saber >= edad){
        console.log("Aceptado");
    }else if (saber < edad){
        console.log("Necesita ser mayor de edad");
    }
}
console.log(contratar());