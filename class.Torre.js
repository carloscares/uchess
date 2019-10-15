class Torre extends Pieza {

	constructor(trueSiBlanca,casillaContenedora){
		super(trueSiBlanca,casillaContenedora);
	}

	despliega() {

		if(this.esBlanca())
			return "T-B";
		else
			return "T-N";
	}

	puedeJugar() {
		// let position = this.casillaActual.split();
		// let x_pos = position[0];
		// let y_pos = position[1];

		// console.log(position);

		// let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		// let numbers = ['1', '2', '3', '4', '5', '6', '7', '8'];

		// let ret = [];

		// for (let i = 0; i < numbers.length; ++i) {
		// 	ret.push(String(x_pos) + String(numbers[i]));
		// }

		// for (let i = 0; i < letters.length; ++i) {
		// 	ret.push(String(letters[i] + String(y_pos)));
		// }

		// console.log(ret);
	}
}

