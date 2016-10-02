var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var lineas = 30;
var l = 0;
var yi, xf;

while(l < lineas) {
  xi = 10 * l;
  yf = 10 * (l + 1);
  dibujarLinea("red", xi, 300, 0, yf);
  console.log("linea " + l)
  l = l + 1
}

dibujarLinea("green", 1, 300, 1, 1)
dibujarLinea("green", 299, 299, 1, 299)

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal) {
  lienzo.beginPath();
  lienzo.strokeStyle = color;
  lienzo.moveTo(xinicial, xfinal);
  lienzo.lineTo(yinicial, yfinal);
  lienzo.stroke();
  lienzo.closePath();
}
