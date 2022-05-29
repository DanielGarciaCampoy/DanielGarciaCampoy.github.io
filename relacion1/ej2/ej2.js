
    function calcular() {
      const radio = Number(document.getElementById('radio').value);

      var perimetro = 2 * 3.14 * radio;
      var area = 3.14 * Math.pow(radio, 2);
      var volumen = (4 * 3.14 * Math.pow(radio, 3)) / 3;

      let resultado = "Perímetro: " + perimetro + "cm<br>Área: " + area + "cm2<br>Volumen: " + volumen + "cm3";

      document.getElementById("resultado").innerHTML = (resultado);
    }