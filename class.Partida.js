
class Partida  {

	constructor() {
		this.jugadorB = "";
		this.jugadorN = "";
		this.tablero = [new Tablero(this)];
		this.turno = "Blanca";
		this.jugadaActual = 0;
	}

	registra_proxima_movida(origen, destino) {
		++this.jugadaActual;

		if (this.jugadaActual > 20) {
			alert("Game over!");
		} else {
			let celda_origen = document.getElementById(origen);
			let celda_destino = document.getElementById(destino);
			let result_area = document.getElementById("result");

			if (this.tableroActual().casillas[destino].ocupadaNegro()) {
				result_area.value = "Ha atrapado la pieza en " + destino + "!";
				
				this.tableroActual().casillas[destino].vaciar();
				this.tableroActual().casillas[destino].ocupar(this.tableroActual().casillas[origen].pieza);
				this.tableroActual().casillas[origen].vaciar();

				celda_origen.innerText = "";
				let x = this.tableroActual().casillas[destino].pieza;
				celda_destino.innerText = x.despliega();
			} else {
				result_area.value = "Se movió a " + destino + "!";
				
				this.tableroActual().casillas[destino].ocupar(this.tableroActual().casillas[origen].pieza);
				this.tableroActual().casillas[origen].vaciar();

				celda_origen.innerText = "";
				let x = this.tableroActual().casillas[destino].pieza;
				celda_destino.innerText = x.despliega();
			}
		}
	}

	juegaBlanca() {
		if (this.turno === 'Blanca')
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

	tableroActual() {
		var n = this.tablero.length - 1;
		return this.tablero[n];
	}

}

