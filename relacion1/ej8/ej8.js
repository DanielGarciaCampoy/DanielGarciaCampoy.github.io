function mcd() {

  var num1 = parseFloat(document.getElementById("num1").value);
  var num2 = parseFloat(document.getElementById("num2").value);

  let mcd = 0;
  
    let temporal; //Para no perder b
    while (num2 !== 0) {
        temporal = num2;
        num2 = num1 % num2;
        num1 = temporal;
    }
    mcd = num1;

  document.getElementById('resultado').innerHTML = "MCD: " + mcd;
}
