var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);


var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");


function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, xfinal);
  lienzo.lineTo(yinicial, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}

function dibujoPorClick() {
var lineas = parseInt(texto.value);
var l = 0;
var yi, xf;
var espacio = ancho / lineas;

while(l < lineas) {
  xi = espacio * l;
  yf = espacio * (l + 1);
  dibujarLinea("red", xi, 300, 0, yf);
  //console.log("linea " + l)
  l = l + 1
}

dibujarLinea("green", 1, 300, 1, 1)
dibujarLinea("green", 299, 299, 1, 299)
}
