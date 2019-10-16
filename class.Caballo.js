class Caballo extends Pieza {

	constructor(trueSiBlanca, casillaContenedora) {
		super(trueSiBlanca, casillaContenedora);
	}

	despliega() {
		if (this.esBlanco())
			return "C-B";
		else
			return "C-N";
	}

	puedeJugar() {
		let pos;
		let color = this.casillaActual.pieza.color;
		let letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		let mostrar = "";
		let aux = 0;
		for (let j = 0; j < letra.length; j++) {
			if (this.casillaActual.id.charAt(0) == letra[j])
				aux = j;
		}

		if (letra[aux - 2] && (parseInt(this.casillaActual.id.charAt(1)) + 1) <= 8 && (parseInt(this.casillaActual.id.charAt(1)) + 1) > 0) {
			pos = letra[aux - 2] + (parseInt(this.casillaActual.id.charAt(1)) + 1);
			for (let i in this.casillaActual.tablero.casilla) {
				if (this.casillaActual.tablero.casilla[i].id == pos) {
					if (this.casillaActual.tablero.casilla[i].pieza.color == color) {
					} else {
						mostrar += pos + " ";

					}
				}
			}
		}

		if (letra[aux - 1] && (parseInt(this.casillaActual.id.charAt(1)) + 2) <= 8 && (parseInt(this.casillaActual.id.charAt(1)) + 2) > 0) {
			pos = letra[aux - 1] + (parseInt(this.casillaActual.id.charAt(1)) + 2);
			for (let i in this.casillaActual.tablero.casilla) {
				if (this.casillaActual.tablero.casilla[i].id == pos) {
					if (this.casillaActual.tablero.casilla[i].pieza.color == color) {
					} else {
						mostrar += pos + " ";
					}
				}
			}
		}

		if (letra[aux + 1] && (parseInt(this.casillaActual.id.charAt(1)) + 2) <= 8 && (parseInt(this.casillaActual.id.charAt(1)) + 2) > 0) {
			pos = letra[aux + 1] + (parseInt(this.casillaActual.id.charAt(1)) + 2);
			for (let i in this.casillaActual.tablero.casilla) {
				if (this.casillaActual.tablero.casilla[i].id == pos) {
					if (this.casillaActual.tablero.casilla[i].pieza.color == color) {
					} else {
						mostrar += pos + " ";
					}
				}
			}

		}

		if (letra[aux + 2] && (parseInt(this.casillaActual.id.charAt(1)) + 1) <= 8 && (parseInt(this.casillaActual.id.charAt(1)) + 1) > 0) {
			pos = letra[aux + 2] + (parseInt(this.casillaActual.id.charAt(1)) + 1);
			for (let i in this.casillaActual.tablero.casilla) {
				if (this.casillaActual.tablero.casilla[i].id == pos) {
					if (this.casillaActual.tablero.casilla[i].pieza.color == color) {
					} else {
						mostrar += pos + " ";
					}
				}
			}

		}

		if (letra[aux - 2] && (parseInt(this.casillaActual.id.charAt(1)) - 1) <= 8 && (parseInt(this.casillaActual.id.charAt(1)) - 1) > 0) {
			pos = letra[aux - 2] + (parseInt(this.casillaActual.id.charAt(1)) - 1);
			for (let i in this.casillaActual.tablero.casilla) {
				if (this.casillaActual.tablero.casilla[i].id == pos) {
					if (this.casillaActual.tablero.casilla[i].pieza.color == color) {
					} else {
						mostrar += pos + " ";
					}
				}
			}
		}

		if (letra[aux - 1] && (parseInt(this.casillaActual.id.charAt(1)) - 2) <= 8 && (parseInt(this.casillaActual.id.charAt(1)) - 2) > 0) {
			pos = letra[aux - 1] + (parseInt(this.casillaActual.id.charAt(1)) - 2);
			for (let i in this.casillaActual.tablero.casilla) {
				if (this.casillaActual.tablero.casilla[i].id == pos) {
					if (this.casillaActual.tablero.casilla[i].pieza.color == color) {
					} else {
						mostrar += pos + " ";
					}
				}
			}
		}

		if (letra[aux + 1] && (parseInt(this.casillaActual.id.charAt(1)) - 2) <= 8 && (parseInt(this.casillaActual.id.charAt(1)) - 2) > 0) {
			pos = letra[aux + 1] + (parseInt(this.casillaActual.id.charAt(1)) - 2);
			for (let i in this.casillaActual.tablero.casilla) {
				if (this.casillaActual.tablero.casilla[i].id == pos) {
					if (this.casillaActual.tablero.casilla[i].pieza.color == color) {
					} else {
						mostrar += pos + " ";
					}
				}
			}
		}

		if (letra[aux + 2] && (parseInt(this.casillaActual.id.charAt(1)) - 1) <= 8 && (parseInt(this.casillaActual.id.charAt(1)) - 1) > 0) {
			pos = letra[aux + 2] + (parseInt(this.casillaActual.id.charAt(1)) - 1);
			for (let i in this.casillaActual.tablero.casilla) {
				if (this.casillaActual.tablero.casilla[i].id == pos) {
					if (this.casillaActual.tablero.casilla[i].pieza.color == color) {
					} else {
						mostrar += pos + " ";
					}
				}
			}
		}
		document.getElementById("posiblesJugadas").innerHTML = mostrar;
		return mostrar;
	}

}

