function calcularnotas(nota) {
  
    if (nota >= 0 && nota <= 3) {
      console.log("Muy deficiente");
    } else if (nota > 3 && nota <= 4) {
      console.log("Insuficiente");
    } else if (nota > 4 && nota <= 5) {
      console.log("Suficiente");
    } else if (nota > 5 && nota <= 6) {
      console.log("Bien");
    } else if (nota > 6 && nota <= 8) {
      console.log("Notable");
    } else if (nota > 8 && nota <= 10) {
      console.log("Sobresaliente");
    } else {
      console.log("Nota no válida");
    }
  }
  
  calcularnotas(8);