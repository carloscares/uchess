class Peon extends Pieza {

	constructor(trueSiBlanca,casillaContenedora){
		super(trueSiBlanca,casillaContenedora);
	}

	despliega() {

		if(this.esBlancoo())
			return '\u2659';
		else
			return '\u265F';
	}
}

