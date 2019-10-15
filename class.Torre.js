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
		this.calcularPosiblesPosiciones1(posiblesPosiciones4, jugadas, tablero,condicion);
		this.calcularPosiblesPosiciones1(posiblesPosiciones2, jugadas, tablero,condicion);
		this.calcularPosiblesPosiciones2(posiblesPosiciones1, jugadas, tablero,condicion);
		this.calcularPosiblesPosiciones2(posiblesPosiciones3, jugadas, tablero,condicion);
		console.log(jugadas);
		return jugadas;

	}
	calcularPosiblesPosiciones2(posiblesPosiciones, jugadas, tablero,condicion) {
		for (var i = (posiblesPosiciones.length - 1); i >= 0; i--) {
			var casilla = tablero.casilla[posiblesPosiciones[i]];
			if (casilla.estaVacia()) {
				jugadas.push(posiblesPosiciones[i]);
				this.cambiarColor(casilla);
			}
			else {
				if (condicion != tablero.casilla[posiblesPosiciones[i]].pieza.esBlanco()) {
					jugadas.push(posiblesPosiciones[i]);
					this.cambiarColor(casilla);
				}
				break;
			}
		}

	}
	calcularPosiblesPosiciones1(posiblesPosiciones, jugadas, tablero,condicion) {
		for (var i = 0; i < posiblesPosiciones.length; i++) {
			var casilla = tablero.casilla[posiblesPosiciones[i]];
			if (casilla.estaVacia()) {
				jugadas.push(posiblesPosiciones[i]);
				this.cambiarColor(casilla);
			}
			else {

				if (condicion != tablero.casilla[posiblesPosiciones[i]].pieza.esBlanco()) {
					jugadas.push(posiblesPosiciones[i]);
					this.cambiarColor(casilla);
				}

				break;
			}
		}
	}
	cambiarColor(casilla) {
		document.getElementById(casilla.id).style.backgroundColor = "orange";

	}
}

