
    function calcular() {
      const radio = Number(document.getElementById('radio').value);

      var perimetro = 2 * 3.14 * radio;
      var area = 3.14 * Math.pow(radio, 2);
      var volumen = (4 * 3.14 * Math.pow(radio, 3)) / 3;

      alert("Perímetro: " + perimetro + "cm\nÁrea: " + area + "cm2\nVolumen: " + volumen + "cm3");
    }