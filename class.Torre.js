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
		let position = this.casillaActual.split();
		console.log(position);
		let ret = [];

	}
}

