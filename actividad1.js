function comer(plantas) {
    const posicionConejo = plantas.indexOf('🐰');
    const posicionProhibido = plantas.indexOf('🚫');
  
    if (posicionProhibido === -1) {
      return plantas.slice(0, posicionConejo);
    }
  
    const plantasSobrevivientes = plantas.slice(0, posicionConejo) + plantas.slice(posicionProhibido);

    const resultado = plantasSobrevivientes.replace(/🚫/, '');

    return resultado;
}

const plantas1 = "🥕🥕🐰🥕🥬🚫🥬🥕";
const plantas2 = "🥬🥕🐰🥕🥕🥬🥬🚫🥕🥬";

console.log(comer(plantas1));
console.log(comer(plantas2));

  