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
}

