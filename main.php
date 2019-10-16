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


</script>

<script>
function init(){
	var di = document.getElementById("pos");
	var resul = tab.tableroActual().casilla['c3'].pieza.mostrarPosibles();
	di.innerHTML = resul;
}

function mostrarPosible(posObjetivo){
	var text = document.getElementById("coordenada").value;
	if(posObjetivo === text){
		init();
		var element;
		var d = document.getElementById("pos").innerHTML;
		var posibles = d.split(",");
		for(var i=0;i<posibles.length;i++){
			element = posibles[i].toString();
			document.getElementById(element).style.backgroundColor = "orange";		
		}	
	}
	
}

</script>


<!DOCTYPE html>
<html>
<head>

</head>
<body>
<div>
	<input id="coordenada" type="text">
	<input type="button" value="Analizar" onclick="mostrarPosible('c3')">
</div>	
<div id="pos" >	</div>
</body>
</html>