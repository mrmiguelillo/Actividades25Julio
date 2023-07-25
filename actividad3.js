

function sonIguales(a, b) {
    if (a.length !== b.length) {
      return false; 
    }
  
    let contador = 0;
    let ban = true;
  
    while (ban && contador < a.length) {
      if (a[contador] !== b[contador]) {
        ban = false;
      }
      contador++;
    }
  
    return ban;
  }
  
  const array1 = [1, 2, 3, 4, 5];
  const array2 = [1, 2, 3, 4, 5];
  
  console.log(sonIguales(array1, array2));