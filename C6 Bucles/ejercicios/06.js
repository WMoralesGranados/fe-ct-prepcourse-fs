function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  // return num > 99 && num < 1000 ? true:false;
  var numeroAString = num.toString();
  return numeroAString.length === 3; 
}

console.log(tieneTresDigitos(999))
module.exports = tieneTresDigitos;
