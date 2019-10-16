class Alfil extends Pieza {

	constructor(trueSiBlanca, casillaContenedora) {
		super(trueSiBlanca, casillaContenedora);
	}

	despliega() {

		if (this.esBlanco())
			return '\u2657';
		else
			return '\u265D';
	}
}

