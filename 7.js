const prompt = require("prompt-sync")({ sigint: true })

function cal() {
    const caliPr = [25]
    const caliSg = [25]
    const caliTr = [50]
    let Prime = parseInt(prompt("Ingre el porcentaje del primer examen "))
    let p = (Prime*caliPr)/100

    let Segun = parseInt(prompt("Ingrese el porcentaje del segundo examen "))
    let s = (Segun*caliSg)/100
    
    let Terc = parseInt(prompt("Ingrese el porcentaje del tercer examen "))
    let t =(Terc*caliTr)/100

    let total=(p+s+t)
    console.log("El total es "+total);

    if (total >= 70){
        console.log("Aprobado");
    }else if (total < 70){
        console.log("Reprobado");
    }
}
console.log(cal());