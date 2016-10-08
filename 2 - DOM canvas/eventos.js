var tecla = {
  UP: 38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

console.log(tecla
)
document.addEventListener("keyup", dibujarTeclado);

function dibujarTeclado(evento) {
  if (evento.keyCode == tecla.UP) {
    console.log("Vamo' pa'rriba")
  }
  if (evento.keyCode == tecla.DOWN) {
    console.log("Vamo' pa'bajo")
  }
  if (evento.keyCode == tecla.LEFT) {
    console.log("Vamo' pa' la izquierda")
  }
  if (evento.keyCode == tecla.RIGHT) {
    console.log("Vamo' pa' la derecha")
  }
 }
