<html>
<head>
<meta charset="utf-8">
<link href="https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap" rel="stylesheet">

<style>
body {
	font-family: "Roboto Condensed", sans-serif;
	background-color: #afafaf;
	text-align: -moz-center;
}

h1 {
	display: block;
	text-align: -moz-center;
	text-shadow: 1px 1px 2px #000000;
	color: #be2a2a;
}

table {
  border-collapse: collapse;
}

td, th {
  border: 2px solid #585858;
  padding: 0.5rem;
}

input, textarea {
	font-family: "Roboto Condensed", sans-serif;
	border: 2px solid black; 
}

textarea {
	-moz-user-select: none;
	user-select: none;
	resize: none;
}
</style>

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

match = new Partida('juan', 'alberto');
match.tableroActual().despliega();
document.writeln();

function check() {
	let piece = document.getElementById("casilla").value;
	let text = document.getElementById("text");

	let possibles = match.tableroActual().casillas[piece].pieza.puedeJugar();
	
	text.value = possibles;

	for (let i = 0; i < possibles.length; ++i) {
		let cell = document.getElementById(possibles[i]);
		cell.setAttribute("style", "background-color: #ff7200;");
	}
}

function play() {
	let play_text = document.getElementById("donde_jugar").value;
	let plays = play_text.split(",");
	let result_area = document.getElementById("result");

	if (match.tableroActual().casillas[plays[0]].pieza == "") {
		result_area.value = "No tienes ninguna pieza en " + plays[0] + "!";
		return null;
	}

	if (match.tableroActual().casillas[plays[1]].pieza !== "") {
		if (match.tableroActual().casillas[plays[1]].pieza.esBlanco()) {
			result_area.value = plays[1] + " tiene una pieza tuya!";
			return null;
		}
	}
	
	if (!match.tableroActual().casillas[plays[0]].pieza.puedeJugar().includes(plays[1])) {
		result_area.value = plays[0] + " no puede ir a " + plays[1] + "!";
		return null;
	}

	match.registra_proxima_movida(plays[0], plays[1]);
}
</script>
</head>

<body>
	<input id="casilla" value="d4" type="text">
	<input id="click" value="Check!" type="button" onclick="check()">
	<textarea rows="1" cols="30" readonly id="text"></textarea>
	<br/>
	<br/>
	<input id="donde_jugar" value="d2,e4" type="text">
	<input id="jugar" value="Play!" type="button" onclick="play()">
	<textarea rows="1" cols="25" readonly id="result"></textarea>
</body>
</html>
