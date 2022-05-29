function caracteres() {
  let caracteres = document.getElementById('caracteres').value;
  let resultado ="" ;
  
  if(caracteres === caracteres.toUpperCase()) {
    resultado += " en mayúsculas";
  }
  else if(caracteres === caracteres.toLowerCase()) {
    resultado += " en minúsculas";
  }
  else {
    resultado += " en mayúsculas y minúsculas";
  }

  document.getElementById("resultado").innerHTML = (resultado);
}