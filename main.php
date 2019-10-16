<script>
<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

include_once 'class.Partida.js';
include_once 'class.Tablero.js';
include_once 'class.Casilla.js';
include_once 'class.Pieza.js';
include_once 'class.Torre.js';
include_once 'class.Alfil.js';
include_once 'class.Caballo.js';
include_once 'class.Peon.js';
include_once 'class.Dama.js';
include_once 'class.Rey.js';
?>

var tab = new Partida('juan','alberto');

function posibles(){
    let casilla = document.getElementById('casilla').value;
    start();
    if (!(tab.tableroActual().casilla[casilla].pieza instanceof Torre)) {
        return;
    }
    let posiblesJugadas = tab.tableroActual().casilla[casilla].pieza.puedeJugar();

    for (let i = 0; i < posiblesJugadas.length; i++){
        document.getElementById(posiblesJugadas[i]).style.backgroundColor = "orange";
    }

    document.getElementById("posibles").innerText = tab.tableroActual().casilla[casilla].pieza.puedeJugar().toString();
}

function start(){
    imprimirTablero();
    document.getElementById('generarBTN').type = "hidden";
    document.getElementById('comprobarBTN').type = "button";
    document.getElementById('casilla').type = "text";
    document.getElementById('jugarBTN').type = "button";
    document.getElementById('jugada').type = "text";
}

function jugar(){
    let jugada = document.getElementById('jugada').value.split(',');
    let casillaInicio = tab.tableroActual().casilla[jugada[0]];
    if (casillaInicio.ocupadaNegro()){
        console.log('no puedes mover piezas negras');
        return;
    }
    if (casillaInicio.estaVacia()){
        console.log('casilla inicial vacia');
        return;
    }
    let pieza = tab.tableroActual().casilla[jugada[0]].pieza;
    let jugadasPosibles = pieza.puedeJugar();
    let casillaLlegada = tab.tableroActual().casilla[jugada[1]];
    if (jugadasPosibles.includes(casillaLlegada.id)){
        tab.tableroActual().ocuparCasilla(casillaLlegada.id, pieza);
    }
    jugadaNegras();
    imprimirTablero();
}

function jugadaNegras(){
    let lenNegras = tab.tableroActual().negras.length;
    let pieza = tab.tableroActual().negras[getRandomInt(lenNegras)]; 
    let jugadasPosibles = pieza.puedeJugar();
    console.log(pieza);
    let casillaLlegadaId = jugadasPosibles[getRandomInt(jugadasPosibles.length)];
    console.log(casillaLlegadaId);
    tab.tableroActual().ocuparCasilla(casillaLlegadaId, pieza);
}

function imprimirTablero(){
    document.getElementById('tablero').innerHTML = tab.tableroActual().despliega_tabla_html();
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

</script>

<body>
<center>
    <input type="button" value="Generar" id="generarBTN" onclick="start()">
    <div id='tablero' onload="start()">
    </div>
    <input type="hidden" value="Comprobar Movimientos" id='comprobarBTN' onclick="posibles()">

    <input type="hidden" id="casilla" placeholder="c4">
    <br>
    <input type="hidden" value="Jugar" id='jugarBTN' onclick="jugar()">
    <input type="hidden" id="jugada" placeholder="a1,a4">
    <div id="posibles">
    </div>
</center>
</body>