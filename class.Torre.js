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
		for (let i = Number(id[1]) + 1; i <= 8; i++) {
			let idx = id[0] + i;
			if (!tablero.casilla[idx].estaVacia()) {
				if (tablero.casilla[idx].pieza.esBlanca() === this.esBlanca() || tablero.casilla[idx].pieza.esNegro() === this.esNegro){
					break;
				}
				posiblesJugadas.push(tablero.casilla[idx].id);
				break;
			}
			posiblesJugadas.push(tablero.casilla[idx].id);
		}

		for (let i = Number(id[1])-1; i >= 1; i--) {
			let idx = id[0] + i;
			if (!tablero.casilla[idx].estaVacia()) {
				if (tablero.casilla[idx].pieza.esBlanca() === this.esBlanca() || tablero.casilla[idx].pieza.esNegro() === this.esNegro){
					break;
				}
				posiblesJugadas.push(tablero.casilla[idx].id);
				break;
			}
			posiblesJugadas.push(tablero.casilla[idx].id);
		}

		// Recorre la fila
		let letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		let index = letra.indexOf(id[0]);

		for (let i = Number(index)+1; i < 8; i++) {
			let idx = letra[i] + id[1];
			if (!tablero.casilla[idx].estaVacia()) {
				if (tablero.casilla[idx].pieza.esBlanca() === this.esBlanca() || tablero.casilla[idx].pieza.esNegro() === this.esNegro){
					break;
				}
				posiblesJugadas.push(tablero.casilla[idx].id);
				break;
			}
			posiblesJugadas.push(tablero.casilla[idx].id);
		}

		for (let i = Number(index)-1; i >= 0; i--) {
			let idx = letra[i] + id[1];
			if (!tablero.casilla[idx].estaVacia()) {
				if (tablero.casilla[idx].pieza.esBlanca() === this.esBlanca() || tablero.casilla[idx].pieza.esNegro() === this.esNegro){
					break;
				}
				posiblesJugadas.push(tablero.casilla[idx].id);
				break;
			}
			posiblesJugadas.push(tablero.casilla[idx].id);
		}

		return posiblesJugadas;
	}
}
