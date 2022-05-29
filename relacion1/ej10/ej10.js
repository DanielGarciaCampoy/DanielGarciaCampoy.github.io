function mesIngles() {

  const numMes = document.getElementById("numMes").value;

  const mesesIngles = {
    "enero":"January",
    "febrero":"February",
    "marzo":"March",
    "abril":"April",
    "mayo":"March",
    "junio":"Juny",
    "julio":"July",
    "agosto":"August",
    "septiembre":"September",
    "octubre":"October",
    "nobiembre":"November",
    "diciembre":"December"
  }

  document.getElementById('resultado').innerHTML = "Month: " + mesesIngles[numMes];
}