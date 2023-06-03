function convertir() {
    let valore = parseInt(document.getElementById("valor").value);
    let resultado = 0;
    let dolar = 500;
    let euro = 550;
    if (document.getElementById("uno").checked){
      resultado = valore / dolar;
      alert("El cambio de Pesos Argentinos a Dólares es: $" +  resultado.toFixed(2));

    }
    else if (document.getElementById("dos").checked){
      resultado = valore / euro;
      alert("El cambio de Pesos Argentinos a Euroes es: " + resultado.toFixed(2))

    }
else{
alert("Tienes que competar todos los requerimientos")
}

  }