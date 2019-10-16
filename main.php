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

    tab = new Partida('juan', 'alberto');
    tab.tableroActual().despliega();

    function hacer() {
        var aux = document.getElementById("t1").value;
        if (tab.tableroActual().casilla[aux].pieza) {
            if (tab.tableroActual().casilla[aux].pieza instanceof Torre) {
                document.getElementById("div1").innerHTML = tab.tableroActual().casilla[aux].pieza.puedeJugar();
            }else{
                document.getElementById("div1").innerHTML="";
                console.log("no es torre")
            }
        }else{
            document.getElementById("div1").innerHTML="";
            console.log("no hay pieza en la posición")
        }
    }
</script>

<body>
    <br>
    <input type="text" id="t1">
    <input type="button" value="ok" onclick="hacer()">
    <br><br>
    <div id="div1"></div>
</body>