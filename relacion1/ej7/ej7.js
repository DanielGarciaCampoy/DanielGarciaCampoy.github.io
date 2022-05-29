function division() {
  
  //variables
  let dividendo = Number(document.getElementById('dividendo').value);
  let divisor = Number(document.getElementById('divisor').value);
  let cociente = 0;

  while (dividendo >= divisor){
    dividendo -= divisor;

    cociente++;
}

  document.getElementById('resultado').innerHTML = "Cociente = " + cociente + "<br>Resto = " + dividendo;
}