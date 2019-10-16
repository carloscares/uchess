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
document.writeln('<input type="button" onclick="tab.tableroActual().mostrarPosibles()" value="Posibles jugadas"/>');
document.writeln('<textarea id="textarea" rows="2" cols="30">b1</textarea>');
document.writeln('<div id ="posiblesJugadas"></div>');


</script>
