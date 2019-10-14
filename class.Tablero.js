class Tablero  {

	constructor(unaPartida) {
		this.colorCasillaClara ="#eeeeee";
		this.colorCasillaOscura = "#444444";
		this.colorPiezaClara = "#a2a2a2";
		this.colorPiezaOscura = "#666690";
		this.casilla = [];
		this.miPartida=unaPartida;
		var letra = ['a','b','c','d','e','f','g','h'];
		for(var i=1 ; i<=8 ;i++)
			for(var j=0 ; j< letra.length ; j++ )
				this.casilla.push(new Casilla(letra[j]+i,this));
		ponePiezasIniciales();
	}

	ponePiezasIniciales() {
		//falta
		return true;
	}

	despliega(){
		return 'nada aún';
	}


}