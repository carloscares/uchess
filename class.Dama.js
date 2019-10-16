class Dama extends Pieza {

	constructor(trueSiBlanca,casillaContenedora){
		super(trueSiBlanca,casillaContenedora);
	}

	despliega() {

		if(this.esBlanca())
			return '\u2655';
		else
			return '\u265B';
	}
}

