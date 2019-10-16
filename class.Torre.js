class Torre extends Pieza {

	constructor(trueSiBlanca, casillaContenedora) {
		super(trueSiBlanca, casillaContenedora);
	}

	despliega() {
		if (this.esBlanca())
			return '\u2656';
		else
			return "\u265C";
	}

	puedeJugar() {
		var jugadas = [];
		var posicionActual = this.casillaActual;
		var tablero = posicionActual.tablero;
		var letras = ["", "a", "b", "c", "d", "e", "f", "g", "h"];
		var aux = posicionActual.id.split("");
		var letra = aux[0];
		var numero = parseInt(aux[1]);
		var indiceLetra;

		for (var i = 0; i < letras.length; i++) {
			if (letras[i] == letra) {
				indiceLetra = i;
				break;
			}
		}
		var posicionAux;
		var condAux;

		for (var i = numero + 1; i < 9; i++) {
			posicionAux = letra + i;
			condAux = tablero.casilla[posicionAux].estaVacia();
			if (condAux) {
				jugadas.push(posicionAux);
				document.getElementById(tablero.casilla[posicionAux].id).style.backgroundColor = "orange";
			} else {
				condAux = tablero.casilla[posicionAux].pieza.esBlanco();
				if (posicionActual.pieza.esBlanco() != condAux) {
					jugadas.push(posicionAux);
					document.getElementById(tablero.casilla[posicionAux].id).style.backgroundColor = "orange";
					break;
				} else {
					break;
				}
			}
		}

		for (var i = numero - 1; i > 0; i--) {
			posicionAux = letra + i;
			condAux = tablero.casilla[posicionAux].estaVacia();
			if (condAux) {
				jugadas.push(posicionAux);
				document.getElementById(tablero.casilla[posicionAux].id).style.backgroundColor = "orange";
			} else {
				condAux = tablero.casilla[posicionAux].pieza.esBlanco();
				if (posicionActual.pieza.esBlanco() != condAux) {
					jugadas.push(posicionAux);
					document.getElementById(tablero.casilla[posicionAux].id).style.backgroundColor = "orange";
					break;
				} else {
					break;
				}
			}
		}

		for (var i = indiceLetra + 1; i < letras.length; i++) {
			posicionAux = letras[i] + numero;
			condAux = tablero.casilla[posicionAux].estaVacia();
			if (condAux) {
				jugadas.push(posicionAux);
				document.getElementById(tablero.casilla[posicionAux].id).style.backgroundColor = "orange";
			} else {
				condAux = tablero.casilla[posicionAux].pieza.esBlanco();
				if (posicionActual.pieza.esBlanco() != condAux) {
					jugadas.push(posicionAux);
					document.getElementById(tablero.casilla[posicionAux].id).style.backgroundColor = "orange";
					break;
				} else {
					break;
				}
			}
		}

		for (var i = indiceLetra - 1; i > 0; i--) {
			posicionAux = letras[i] + numero;
			condAux = tablero.casilla[posicionAux].estaVacia();
			if (condAux) {
				jugadas.push(posicionAux);
				document.getElementById(tablero.casilla[posicionAux].id).style.backgroundColor = "orange";
			} else {
				condAux = tablero.casilla[posicionAux].pieza.esBlanco();
				if (posicionActual.pieza.esBlanco() != condAux) {
					jugadas.push(posicionAux);
					document.getElementById(tablero.casilla[posicionAux].id).style.backgroundColor = "orange";
					break;
				} else {
					break;
				}
			}
		}
		console.log(jugadas);
		return jugadas;
	}

}

