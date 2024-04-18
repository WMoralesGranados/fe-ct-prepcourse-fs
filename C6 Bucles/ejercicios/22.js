function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  var contador = 0
  var suma = num
  
  do {
    suma =suma + 5
    contador++
  } while (contador < 8);
  return suma;
}

console.log(doWhile(10))

module.exports = doWhile;