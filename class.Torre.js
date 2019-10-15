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
		let posiblesJugadas = Array();
		let tablero = this.casillaActual.tablero;
		let id = this.casillaActual.id.split("");
		// Recorre la columna
		let eated = false;
		for (let i = Number(id[1]) + 1; i <= 8; i++) {
			let idx = id[0] + i;
			if (!tablero.casilla[idx].estaVacia()) {
				if (!eated) {
					eated = true;
				}
				else {
					break;
				}
			}
			posiblesJugadas.push(tablero.casilla[idx].id);
		}

		eated = false;
		for (let i = Number(id[1])-1; i >= 1; i--) {
			let count = 0;
			let idx = id[0] + i;
			if (!tablero.casilla[idx].estaVacia()) {
				if (!eated) {
					eated = true;
				}
				else {
					break;
				}
			}
			posiblesJugadas.push(tablero.casilla[idx].id);
		}

		// Recorre la fila
		eated = false
		let letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		let index = letra.indexOf(id[0]);

		for (let i = Number(index)+1; i < 8; i++) {
			let count = 0;
			let idx = letra[i] + id[1];
			if (!tablero.casilla[idx].estaVacia()) {
				if (!eated) {
					eated = true;
				}
				else {
					break;
				}
			}
			posiblesJugadas.push(tablero.casilla[idx].id);
		}

		eated = false;
		for (let i = Number(index)-1; i >= 0; i--) {
			let count = 0;
			let idx = letra[i] + id[1];
			if (!tablero.casilla[idx].estaVacia()) {
				if (!eated) {
					eated = true;
				}
				else {
					break;
				}
			}
			posiblesJugadas.push(tablero.casilla[idx].id);
		}

		return posiblesJugadas;
	}
}
