class Caballo extends Pieza {

	constructor(trueSiBlanca,casillaContenedora){
		super(trueSiBlanca,casillaContenedora);
	}

	despliega() {

		if(this.esBlanco())
			return "C-B";
		else
			return "C-N";
	}

	puedeJugar() {
		let position = this.casillaActual.id.split("");
		let x_pos = position[0];
		let y_pos = position[1];

		console.log(position);

		let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		let numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

		let ret = [];

		let index_x_1;
		let index_y_1;
		if (letters.indexOf(x_pos) - 1 > 0 && numbers.indexOf(y_pos) + 2 < 8) {
			index_x_1 = letters[letters.indexOf(x_pos) - 1];
			index_y_1 = numbers[numbers.indexOf(y_pos) + 2];
		}
		
		let index_x_2;
		let index_y_2;
		if (letters.indexOf(x_pos) + 1 < 8 && numbers.indexOf(y_pos) + 2 < 8) {
			index_x_2 = letters[letters.indexOf(x_pos) + 1];
			index_y_2 = numbers[numbers.indexOf(y_pos) + 2];
		}

		let index_x_3;
		let index_y_3;
		if (letters.indexOf(x_pos) - 1 > 0 && numbers.indexOf(y_pos) - 2 > 0) {
			index_x_3 = letters[letters.indexOf(x_pos) - 1];
			index_y_3 = numbers[numbers.indexOf(y_pos) - 2];
		}

		let index_x_4;
		let index_y_4;
		if (letters.indexOf(x_pos) + 1 < 8 && numbers.indexOf(y_pos) - 2 > 0) {
			index_x_4 = letters[letters.indexOf(x_pos) + 1];
			index_y_4 = numbers[numbers.indexOf(y_pos) - 2];
		}


		let pos_1 = index_x_1 + index_y_1;
		let pos_2 = index_x_2 + index_y_2;
		let pos_3 = index_x_3 + index_y_3;
		let pos_4 = index_x_4 + index_y_4;

		// do the next bit for every position

		if (isNaN(pos_1)) {
			if (this.casillaActual.tablero.casilla[pos_1].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casilla[pos_1].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casilla[pos_1].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casilla[pos_1].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casilla[pos_1].id);
			}
		}
		

		// ---------------------------

		if (isNaN(pos_2)) {
			if (this.casillaActual.tablero.casilla[pos_2].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casilla[pos_2].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casilla[pos_2].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casilla[pos_2].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casilla[pos_2].id);
			}
		}
		

		// ---------------------------

		if (isNaN(pos_3)) {
			if (this.casillaActual.tablero.casilla[pos_3].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casilla[pos_3].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casilla[pos_3].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casilla[pos_3].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casilla[pos_3].id);
			}
		}
		

		// ---------------------------

		if (isNaN(pos_4)) {
			if (this.casillaActual.tablero.casilla[pos_4].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casilla[pos_4].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casilla[pos_4].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casilla[pos_4].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casilla[pos_4].id);
			}
		}
		

		console.log(ret);
		return ret;
	}
}
