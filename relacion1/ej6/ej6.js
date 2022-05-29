function esPalindromo() {
  let palabra = document.getElementById('palabra').value;
  let longitudPalabra = palabra.length;

  palabra = palabra.toLowerCase();
  var char;
  var espacioPalabra = "";
  var palabraReves = "";

  for (i = 0; i < longitudPalabra; i++) {

    char = palabra.charAt(i);
    if (char != " ") {
      espacioPalabra += char;
      palabraReves = char + palabraReves;
    }

  }
  if (espacioPalabra == palabraReves) {
    document.getElementById("resultado").innerHTML = ("Si es un palíndromo");  
  } else {
    document.getElementById("resultado").innerHTML = ("No es un Palindromo, palíndromo correspondiente: " + palabra + palabraReves);
  }
}