class Caballo extends Pieza {

	constructor(trueSiBlanca, casillaContenedora){
		super(trueSiBlanca, casillaContenedora);
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


		let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		let numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

		let ret = [];

		let index_x_1;
		let index_y_1;
		if (letters.indexOf(x_pos) - 1 >= 0 && numbers.indexOf(y_pos) + 2 <= 8) {
			index_x_1 = letters[letters.indexOf(x_pos) - 1];
			index_y_1 = numbers[numbers.indexOf(y_pos) + 2];
		}
		
		let index_x_2;
		let index_y_2;
		if (letters.indexOf(x_pos) + 1 <= 8 && numbers.indexOf(y_pos) + 2 <= 8) {
			index_x_2 = letters[letters.indexOf(x_pos) + 1];
			index_y_2 = numbers[numbers.indexOf(y_pos) + 2];
		}

		let index_x_3;
		let index_y_3;
		if (letters.indexOf(x_pos) - 1 >= 0 && numbers.indexOf(y_pos) - 2 >= 0) {
			index_x_3 = letters[letters.indexOf(x_pos) - 1];
			index_y_3 = numbers[numbers.indexOf(y_pos) - 2];
		}

		let index_x_4;
		let index_y_4;
		if (letters.indexOf(x_pos) + 1 <= 8 && numbers.indexOf(y_pos) - 2 >= 0) {
			index_x_4 = letters[letters.indexOf(x_pos) + 1];
			index_y_4 = numbers[numbers.indexOf(y_pos) - 2];
		}

		let index_x_5;
		let index_y_5;
		if (letters.indexOf(x_pos) + 2 <= 8 && numbers.indexOf(y_pos) - 1 >= 0) {
			index_x_5 = letters[letters.indexOf(x_pos) + 2];
			index_y_5 = numbers[numbers.indexOf(y_pos) - 1];
		}

		let index_x_6;
		let index_y_6;
		if (letters.indexOf(x_pos) + 2 <= 8 && numbers.indexOf(y_pos) + 1 <= 8) {
			index_x_6 = letters[letters.indexOf(x_pos) + 2];
			index_y_6 = numbers[numbers.indexOf(y_pos) + 1];
		}

		let index_x_7;
		let index_y_7;
		if (letters.indexOf(x_pos) - 2 >= 0 && numbers.indexOf(y_pos) - 1 >= 0) {
			index_x_7 = letters[letters.indexOf(x_pos) - 2];
			index_y_7 = numbers[numbers.indexOf(y_pos) - 1];
		}

		let index_x_8;
		let index_y_8;
		if (letters.indexOf(x_pos) - 2 >= 0 && numbers.indexOf(y_pos) + 1 <= 8) {
			index_x_8 = letters[letters.indexOf(x_pos) - 2];
			index_y_8 = numbers[numbers.indexOf(y_pos) + 1];
		}


		let pos_1 = index_x_1 + index_y_1;
		let pos_2 = index_x_2 + index_y_2;
		let pos_3 = index_x_3 + index_y_3;
		let pos_4 = index_x_4 + index_y_4;
		let pos_5 = index_x_5 + index_y_5;
		let pos_6 = index_x_6 + index_y_6;
		let pos_7 = index_x_7 + index_y_7;
		let pos_8 = index_x_8 + index_y_8;

		// do the next bit for every position

		if (typeof pos_1 === "string") {
			if (this.casillaActual.tablero.casillas[pos_1].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_1].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casillas[pos_1].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_1].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casillas[pos_1].id);
			}
		}
		

		// ---------------------------

		if (typeof pos_2 === "string") {
			if (this.casillaActual.tablero.casillas[pos_2].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_2].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casillas[pos_2].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_2].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casillas[pos_2].id);
			}
		}
		

		// ---------------------------

		if (typeof pos_3 === "string") {
			if (this.casillaActual.tablero.casillas[pos_3].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_3].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casillas[pos_3].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_3].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casillas[pos_3].id);
			}
		}
		

		// ---------------------------

		if (typeof pos_4 === "string") {
			if (this.casillaActual.tablero.casillas[pos_4].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_4].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casillas[pos_4].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_4].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casillas[pos_4].id);
			}
		}

		// ---------------------------

		if (typeof pos_5 === "string") {
			if (this.casillaActual.tablero.casillas[pos_5].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_5].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casillas[pos_5].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_5].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casillas[pos_5].id);
			}
		}
		
		// ---------------------------

		if (typeof pos_6 === "string") {
			if (this.casillaActual.tablero.casillas[pos_6].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_6].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casillas[pos_6].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_6].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casillas[pos_6].id);
			}
		}

		// ---------------------------

		if (typeof pos_7 === "string") {
			if (this.casillaActual.tablero.casillas[pos_7].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_7].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casillas[pos_7].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_7].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casillas[pos_7].id);
			}
		}

		// ---------------------------

		if (typeof pos_8 === "string") {
			if (this.casillaActual.tablero.casillas[pos_8].ocupadaNegro()) {
				if (this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_8].id);
				} else {
					// nothing happens because i can't eat my own pieces.
				}
			} else if (this.casillaActual.tablero.casillas[pos_8].ocupadaBlanco()) {
				if (!this.esBlanco) {
					ret.push(this.casillaActual.tablero.casillas[pos_8].id);
				} else {
					// nothing happens because %
				}
			} else {
				ret.push(this.casillaActual.tablero.casillas[pos_8].id);
			}
		}

		return ret;
	}
}
