function triangulo() {
  const lado1 = Number(document.getElementById('lado1').value);
  const lado2 = Number(document.getElementById('lado2').value);
  const lado3 = Number(document.getElementById('lado3').value);

  var respuesta = "";

  if (lado1 == lado2 && lado1 == lado3 && lado2 == lado3) { //equilatero
    respuesta = "Es un triángulo equilátero";
  } else if ((lado1 != lado2 && lado2 == lado3) || (lado1 == lado2 && lado2 != lado3) || (lado3 != lado1 && lado2 == lado3) || (lado3 == lado1 && lado2 != lado3)) {
    respuesta = "Es un triángulo isósceles"
  } else {
    respuesta = "Es un triángulo escaleno";
  }
  document.getElementById("resultado").innerHTML = (respuesta);
}