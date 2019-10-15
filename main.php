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
tab.tableroActual().despliega();

function posibles(){
    let casilla = document.getElementById('casilla').value;
    regenerar();
    if (!(tab.tableroActual().casilla[casilla].pieza instanceof Torre)) {
        return;
    }
    let posiblesJugadas = tab.tableroActual().casilla[casilla].pieza.puedeJugar();

    for (let i = 0; i < posiblesJugadas.length; i++){
        document.getElementById(posiblesJugadas[i]).style.backgroundColor = "orange";
    }

    document.getElementById("posibles").innerText = tab.tableroActual().casilla[casilla].pieza.puedeJugar().toString();
}

function regenerar(){
    document.body.innerHTML = "";
    tab.tableroActual().despliega();
    document.write(`<input type="button" value="Comprobar Movimientos" onclick="posibles()">

<input type="text" id="casilla" placeholder="c4">
<div id="posibles">
</div>`);
}
</script>

<body>

<input type="button" value="Comprobar Movimientos" onclick="posibles()">

<input type="text" id="casilla" placeholder="c4">
<div id="posibles">
</div>

</body>