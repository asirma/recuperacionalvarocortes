function sumar(numeros) {
    let suma = numeros.reduce((a, b) => a + b, 0);
    console.log('La suma total de los números es: ' + suma);
  }
  
  
  sumar([18, 51, 23]);