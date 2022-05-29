function letraDNI() {

  const letrasDNI = "TRWAGMYFPDXBNJZSQVHLCKE";

  let dni = Number(document.getElementById('numDni').value);

  let resto = dni % 23;

  let letra = letrasDNI.substring(resto, resto+1);

  document.getElementById("resultado").innerHTML = ("Letra del DNI: " + letra);

}