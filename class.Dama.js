class Dama extends Pieza {

	constructor(trueSiBlanca,casillaContenedora){
		super(trueSiBlanca,casillaContenedora);
	}

	despliega() {

		if(this.esBlanca())
			return "D-B";
		else
			return "D-N";
	}
}

