function recortar (CantidadLetras, palabras){
    let palabrasdos = []
    palabras.forEach(element => {
        palabrasdos.push(element.slice(0, CantidadLetras))
    });

    return palabrasdos
}

let numero = 4
let array = ["elefante", "dinosaurio", "avioneta"]

console.log(recortar(numero, array))