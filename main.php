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

tab = new Partida('juan','alberto');
tab.tableroActual().despliega();
console.log(tab.tableroActual().casilla["a1"].pieza.puedeJugar());

function posibles(){
    
    document.getElementById("posibles").innerText = tab.tableroActual().casilla['h4'].pieza.puedeJugar().toString();
}
</script>

<body>

<input type="button" value="cllick" onclick="posibles()">

<div id="posibles">
</div>

</body>