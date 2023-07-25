function obtenerResultado (jugadoraA, jugadoraB, puntajesA, puntajesB){
    let capA = 0
    let capB = 0

    for (let i = 0; i< puntajesA.length; i++) {
        if (puntajesA[i]>puntajesB[i]){
            capA = capA+1
            console.log(`Gana ${jugadoraA} en el puntaje numero ${i+1}`)
        }
        else
        {
            if(puntajesA[i]<puntajesB[i]){
                capB = capB+1
                console.log(`Gana ${jugadoraB} en el puntaje numero ${i+1}`)
            }
            else
            {
                console.log(`Hay empate en el puntaje numero ${i+1}`)
            }
        }
    }

    if(capA > capB)
    {
        return `Gana Ada con un puntaje de ${capA}`
    }
    else
    {
        if(capA < capB){
            return `Gana Grace con un puntaje de ${capB}`
        }
        else
        {
            return `Hay empate`
        }
    }
}

const jugadoraA = "Ada"
const jugadoraB = "Grace"
const puntajesA = [4, 6, 2]
const puntajesB = [4, 6, 2]

console.log(obtenerResultado(jugadoraA, jugadoraB, puntajesA, puntajesB))