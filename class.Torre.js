class Torre extends Pieza {
  constructor(trueSiBlanca, casillaContenedora) {
    super(trueSiBlanca, casillaContenedora);
  }

  despliega() {
    if (this.esBlanca()) return "T-B";
    else return "T-N";
  }

  puedeJugar() {
    var posiblesCasillas = new Array();
    var casilla = this.obtenerCasilla();
    var posicion = casilla.id;
    var condicion = this.casillaActual.pieza.esBlanco();
    var posicionActual = this.casillaActual;
	var tablero = posicionActual.tablero;
	tablero.cambioColorJugada();
    var res = posicion.split("");
    //Aca hay errores
    var posicionesFilaIzquierda = this.posicionesFilaFuncionIzquierda(
      res[0],
      res[1]
    );
    var posicionesFilaDerecha = this.posicionesFilaFuncionDerecha(
      res[0],
      res[1]
    );
    var posicionesColumnaArriba = this.posicionesColumnaFuncionArriba(
      res[1],
      res[0]
    );
    var posicionesColumnaAbajo = this.posicionesColumnaFuncionAbajo(
      res[1],
      res[0]
    );

	console.log(posicionesFilaIzquierda);
	console.log(posicionesFilaDerecha);
	console.log(posicionesColumnaArriba);
	console.log(posicionesColumnaAbajo);

    for (var i = 0; i < posicionesFilaIzquierda.length; i++) {

      var casilla = tablero.casilla[posicionesFilaIzquierda[i]];
      if (casilla.estaVacia()) {
		posiblesCasillas.push(posicionesFilaIzquierda[i]);
		this.cambiarColor(casilla);
      } else {
        if (
          condicion !=
          tablero.casilla[posicionesFilaIzquierda[i]].pieza.esBlanco()
        ) {
		  posiblesCasillas.push(posicionesFilaIzquierda[i]);
		  this.cambiarColor(casilla);
        }
        break;
      }
    }

    for (var i = 0; i < posicionesFilaDerecha.length; i++) {

      var casilla = tablero.casilla[posicionesFilaDerecha[i]];
      if (casilla.estaVacia()) {
		posiblesCasillas.push(posicionesFilaDerecha[i]);
		this.cambiarColor(casilla);
      } else {
        if (
          condicion !=
          tablero.casilla[posicionesFilaDerecha[i]].pieza.esBlanco()
        ) {
		  posiblesCasillas.push(posicionesFilaDerecha[i]);
		  this.cambiarColor(casilla);
        }
        break;
      }
    }

    for (var j = 0; j < posicionesColumnaArriba.length; j++) {
      var casillaColumna = tablero.casilla[posicionesColumnaArriba[j]];
      if (casillaColumna.estaVacia()) {
		posiblesCasillas.push(posicionesColumnaArriba[j]);
		this.cambiarColor(casillaColumna);
      } else {
        if (condicion != tablero.casilla[posicionesColumnaArriba[j]].pieza.esBlanco()) {
		  posiblesCasillas.push(posicionesColumnaArriba[j]);
		  this.cambiarColor(casillaColumna);
        }
        break;
      }
	}
	
	for (var j = 0; j < posicionesColumnaAbajo.length; j++) {
		var casillaColumna = tablero.casilla[posicionesColumnaAbajo[j]];
		if (casillaColumna.estaVacia()) {
		  posiblesCasillas.push(posicionesColumnaAbajo[j]);
		  this.cambiarColor(casillaColumna);
		} else {
		  if (condicion != tablero.casilla[posicionesColumnaAbajo[j]].pieza.esBlanco()) {
			posiblesCasillas.push(posicionesColumnaAbajo[j]);
			this.cambiarColor(casillaColumna);
		  }
		  break;
		}
	  }
    console.log(posiblesCasillas);
    return posiblesCasillas;
  }

  //Ver la transformación de las letras a los números y viceversa.

  posicionesFilaFuncionIzquierda(letraFila, numeroColumna) {
    var arrayFila = new Array();
    var numeroTransformado = this.transformarLetra(letraFila);
    for (var j = numeroTransformado -1 ; j > 0; j--) {
      let letraTransformada = this.transformarNumero(j);
      let nuevaPosicion = letraTransformada + numeroColumna;
      arrayFila.push(nuevaPosicion);
    }

    return arrayFila;
  }

  posicionesFilaFuncionDerecha(letraFila, numeroColumna) {
    var arrayFila = new Array();
    var numeroTransformado = this.transformarLetra(letraFila);
    for (var i = numeroTransformado + 1; i <= 8; i++) {
      let letraTransformada = this.transformarNumero(i);
      let nuevaPosicion = letraTransformada + numeroColumna;
      arrayFila.push(nuevaPosicion);
    }

    return arrayFila;
  }

  posicionesColumnaFuncionAbajo(numeroColumna, letraFila) {
    var arrayColumna = new Array();
    var numeroVerdadero = parseInt(numeroColumna, 10);

    for (var j = numeroVerdadero + 1; j <= 8; j++) {
      let numeroTransformado = j.toString();
      let nuevaPosicion = letraFila + numeroTransformado;
      arrayColumna.push(nuevaPosicion);
    }
    return arrayColumna;
  }

  posicionesColumnaFuncionArriba(numeroColumna, letraFila) {
    var arrayColumna = new Array();
    var numeroVerdadero = parseInt(numeroColumna, 10);
    for (var i = numeroVerdadero -1; i > 0; i--) {
      let numeroTransformado = i.toString();
      let nuevaPosicion = letraFila + numeroTransformado;
      arrayColumna.push(nuevaPosicion);
    }
    return arrayColumna;
  }

  transformarLetra(letra) {
    var numero = null;
    switch (letra) {
      case "a":
        numero = 1;
        break;
      case "b":
        numero = 2;
        break;
      case "c":
        numero = 3;
        break;
      case "d":
        numero = 4;
        break;
      case "e":
        numero = 5;
        break;
      case "f":
        numero = 6;
        break;
      case "g":
        numero = 7;
        break;
      case "h":
        numero = 8;
        break;
    }
    return numero;
  }

  transformarNumero(numero) {
    var letra = null;
    switch (numero) {
      case 1:
        letra = "a";
        break;
      case 2:
        letra = "b";
        break;
      case 3:
        letra = "c";
        break;
      case 4:
        letra = "d";
        break;
      case 5:
        letra = "e";
        break;
      case 6:
        letra = "f";
        break;
      case 7:
        letra = "g";
        break;
      case 8:
        letra = "h";
        break;
    }
    return letra;
  }

  cambiarColor(casilla) {
	document.getElementById(casilla.id).style.backgroundColor = "red";

}
}
