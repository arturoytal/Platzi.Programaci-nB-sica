
//Variables para teclas de movimiento.
var tecla = {
  UP: 38,
  DOWN:40,
  LEFT:37,
  RIGHT:39
};

//Ver en la consola el código o identificativo de cada tecla.
console.log(tecla);

//Escuchamos el teclado a ver qué se pulsa.
document.addEventListener("keyup", dibujarTeclado);


//Función que ejecutará cuando se presionen las teclas de movimiento.

function dibujarTeclado(evento) {
  //Con if.
  /*
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
  */

  //Con switch
  switch (evento.keyCode) {
    case tecla.UP:
      console.log("Arriba");
      break;
    case tecla.DOWN:
          console.log("Abajo");
      break;
    case tecla.LEFT:
          console.log("Izquierda");
      break;
    case tecla.RIGHT:
          console.log("Derecha");
      break;
    default:
      console.log("Otra tecla!");
      break;
  }
}
