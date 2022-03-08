var teclas ={
UP:38,
DOWN:40,
LEFT:37,
RIGHT:39
};
document.addEventListener("keydown", mover)
var vp = document.getElementById("villa_platzi");
var papel = vp.getContext("2d");
var xl = 50;
var yl = 50;


var fondo =
{
  url: "tile.png",
  cargaOK: false
}

var vaca =
{
  url: "vaca.png",
  cargaOK: false
}

var cerdo =
{
  url: "cerdo.png",
  cargaOK: false,
}

var pollo =
{
  url: "pollo.png",
  cargaOK: false
}
var cantidad = aleatorio(0, 10);
console.log(cantidad);

fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image()
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image()
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image()
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo()
{
  fondo.cargaOK = true;
  dibujar();
}

function cargarVaca()
{
  vaca.cargaOK = true;
  dibujar();
}

function cargarCerdo()
{
  cerdo.cargaOK = true;
  dibujar();
}

function cargarPollo()
{
  pollo.cargaOK = true;
  dibujar();
}

function dibujar()
{
  if (fondo.cargaOK == true)
  {
    papel.drawImage(fondo.imagen, 0, 0);
  }

  if (vaca.cargaOK == true)
  {
    for (var v=0; v < cantidad; v++)
    {
    var x = aleatorio(0, 5);
    var y = aleatorio(0, 5);
    var x = x * 80;
    var y = y * 80;
    papel.drawImage(vaca.imagen, x, y);
    }
  }
  if (cerdo.cargaOK == true)
  {
    papel.drawImage(cerdo.imagen, xl, yl);
  }
  if (pollo.cargaOK == true)
  {
  for (var v=0; v < cantidad; v++)
  {
    var x = aleatorio(0, 5);
    var y = aleatorio(0, 5);
    var x = x * 80;
    var y = y * 80;
    var x = aleatorio(0, 420);
    var y = aleatorio(0, 420);
    papel.drawImage(pollo.imagen, x, y);
  }
}
}

function aleatorio(min, maxi)
{
  var resultado;
  resultado = Math.floor(Math.random() * (maxi - min + 1)) + min;
  return resultado;
}

function mover(evento)
{
  var movimiento = 10 ;
  switch (evento.keyCode)
  {
    case teclas.UP:
    dibujar()
    papel.drawImage(cerdo.imagen, xl, yl)
    yl = yl - movimiento;
    console.log("arriba");
    break;

    case teclas.DOWN:
    dibujar()
    papel.drawImage(cerdo.imagen, xl, yl);
    (xl, yl + movimiento);
    yl = yl + movimiento;
    console.log("abajo");
    break;

    case teclas.LEFT:
    dibujar()
    papel.drawImage(cerdo.imagen, xl, yl);
    (xl, yl, xl - movimiento, yl);
    xl = xl - movimiento;
    console.log("izquierda");
    break;

    case teclas.RIGHT:
    dibujar()
    papel.drawImage(cerdo.imagen, xl, yl);
    (xl + movimiento, yl);
    xl = xl + movimiento;
    console.log("derecha");
    break;
  }
  }
