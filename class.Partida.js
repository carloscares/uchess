
class Partida  {

	constructor() {
		this.jugadorB="";
		this.jugadorN="";
		this.tablero = [new Tablero(this)];
		this.turno = "Blanca";
		this.jugadaActual = 0;
	}

	registra_proxima_movida(origen,destino){


	}

	juegaBlanca() {
		if (this.turno==='Blanca')
			return true;
		else
			return false;
	}

	juegaNegra() {
		return ! juegaBlanca();
	}

	cambiaTurno() {
		if (this.juegaBlanca())
			this.turno = 'Negra';
		else
			this.turno = 'Blanca';
	}

}