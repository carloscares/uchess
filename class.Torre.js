class Torre extends Pieza {

	constructor(trueSiBlanca, casillaContenedora) {
		super(trueSiBlanca, casillaContenedora);
	}

	despliega() {

		if (this.esBlanca())
			return "T-B";
		else
			return "T-N";
	}
	puedeJugar() {
		var jugadas = new Array();
		var posicionActual = this.casillaActual;
		var tablero = posicionActual.tablero;
		var posiblesPosiciones1 = new Array();
		var posiblesPosiciones2 = new Array();
		var posiblesPosiciones3 = new Array();
		var posiblesPosiciones4 = new Array();
		var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		var condicion = this.casillaActual.pieza.esBlanco();
		var lugar = posicionActual.id.split("");
		var letra = lugar[0];
		var indiceNumero = lugar[1];

		var indiceLetra = 0;
		for (var i = 0; i < 8; i++) {
			if (letras[i] == letra) {
				indiceLetra = i;
				break;
			}
		}
		for (var i = 1; i < 9; i++) {
			var pos = "";
			pos = letra + i;
			if (indiceNumero > i) {
				posiblesPosiciones1.push(pos);
			}
			if (indiceNumero < i) {
				posiblesPosiciones2.push(pos);
			}
			pos = letras[i - 1] + indiceNumero;
			if (indiceLetra > (i - 1)) {
				posiblesPosiciones3.push(pos);
			}
			if (indiceLetra < (i - 1)) {
				posiblesPosiciones4.push(pos);
			}
		}
		for (var i = (posiblesPosiciones1.length - 1); i >= 0; i--) {
			var casilla = tablero.casilla[posiblesPosiciones1[i]];
			if (casilla.estaVacia()) {
				jugadas.push(posiblesPosiciones1[i]);
			}
			else {
				if (condicion != tablero.casilla[posiblesPosiciones1[i]].pieza.esBlanco()) {
					jugadas.push(posiblesPosiciones1[i]);
				}
				break;
			}
		}
		for (var i = (posiblesPosiciones3.length - 1); i >= 0; i--) {
			var casilla = tablero.casilla[posiblesPosiciones3[i]];
			if (casilla.estaVacia()) {
				jugadas.push(posiblesPosiciones3[i]);
			}
			else {
				if (condicion != tablero.casilla[posiblesPosiciones3[i]].pieza.esBlanco()) {
					jugadas.push(posiblesPosiciones3[i]);
				}
				break;
			}
		}
		for (var i = 0; i < posiblesPosiciones2.length; i++) {
			var casilla = tablero.casilla[posiblesPosiciones2[i]];
			if (casilla.estaVacia()) {
				jugadas.push(posiblesPosiciones2[i]);
			}
			else {
				if (condicion != tablero.casilla[posiblesPosiciones2[i]].pieza.esBlanco()) {
					jugadas.push(posiblesPosiciones2[i]);
				}
				break;
			}
		}
		for (var i = 0; i < posiblesPosiciones4.length; i++) {
			var casilla = tablero.casilla[posiblesPosiciones4[i]];
			if (casilla.estaVacia()) {
				jugadas.push(posiblesPosiciones4[i]);
			}
			else {
				if (condicion != tablero.casilla[posiblesPosiciones4[i]].esBlanco()) {
					jugadas.push(posiblesPosiciones4[i]);
				}
				break;
			}
		}
		console.log(jugadas);
		return jugadas;

	}
}

