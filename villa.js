var teclas = {
  UP: 38,
  DOWN: 40,
  LEFT: 37,
  RIGHT: 39,
};

document.addEventListener("keydown", mover);
var vp = document.getElementById("villa_platzi");
var papel = vp.getContext("2d");
var xl = 150;
var yl = 150;
var cantidad = aleatorio(0, 10);
var vacas = [];
var pollos = [];
for (var v = 0; v < cantidad; v++)
{
  vacas.push({ x: aleatorio(0, 10) * 50, y: aleatorio(0, 10) * 50 });
  pollos.push({ x: aleatorio(0, 10) * 50, y: aleatorio(0, 10) * 50 });
}

var fondo = {
  url: "tile.png",
  cargaOK: false,
};

var vaca = {
  url: "vaca.png",
  cargaOK: false,
};

var cerdo = {
  url: "cerdo.png",
  cargaOK: false,
};

var pollo = {
  url: "pollo.png",
  cargaOK: false,
};

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo() {
  fondo.cargaOK = true;
  dibujar();
}
function cargarVaca() {
  vaca.cargaOK = true;
  dibujar();
}
function cargarCerdo() {
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollo() {
  pollo.cargaOK = true;
  dibujar();
}

function dibujar() {
  if (fondo.cargaOK == true) {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (vaca.cargaOK == true)
  {
    vacas.forEach((item) => {
      papel.drawImage(vaca.imagen, item.x, item.y);
    });
  }
  if (cerdo.cargaOK == true)
  {
    papel.drawImage(cerdo.imagen, xl, yl);
  }

  if (pollo.cargaOK == true)
  {
    pollos.forEach((item) => {
      papel.drawImage(pollo.imagen, item.x, item.y);
    });
    }
  }


function aleatorio(min, maxi) {
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function mover(evento) {
  var movimiento = 10;
  switch (evento.keyCode) {
    case teclas.UP:
      xl, yl - movimiento;
      yl = yl - movimiento;
      dibujar();
      break;

    case teclas.DOWN:
      xl, yl + movimiento;
      yl = yl + movimiento;
      dibujar();
      break;

    case teclas.LEFT:
      xl - movimiento, yl;
      xl = xl - movimiento;
      dibujar();
      break;

    case teclas.RIGHT:
      xl + movimiento, yl;
      xl = xl + movimiento;
      dibujar();
      break;
  }
}
