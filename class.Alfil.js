class Alfil extends Pieza {

	constructor(trueSiBlanca,casillaContenedora){
		super(trueSiBlanca,casillaContenedora);
	}

	despliega() {

		if(this.esBlanco())
			return "A-B";
		else
			return "A-N";
	}
}

