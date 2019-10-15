<html>
<head>
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

function check() {
	let piece = document.getElementById("casilla").value;
	let text = document.getElementById("text");

	let possibles = tab.tableroActual().casilla['d4'].pieza.puedeJugar();
	
	text.value = possibles;

	for (let i = 0; i < possibles.length; ++i) {
		let cell = document.getElementById(possibles[i]);
		cell.setAttribute("style", "background-color: orange;");
	}
}

tab = new Partida('juan','alberto');
tab.tableroActual().despliega();
document.writeln();
</script>
</head>

<body>
	<input id="casilla" value="coord pieza" type="text">
	<input id="click" value="Check!" type="button" onclick="check()">
	<textarea id="text"></textarea>
</body>
</html>
