class Tablero {

	constructor(unaPartida) {
		this.colorCasillaClara = "#0066ff";
		this.colorCasillaOscura = "#cc0000";
		this.colorPiezaClara = "#a2a2a2";
		this.colorPiezaOscura = "#666690";
		this.casilla = new Array();
		this.miPartida = unaPartida;
		this.negras = new Array();
		this.blancas = new Array();
		var letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		for (var i = 1; i <= 8; i++)
			for (var j = 0; j < letra.length; j++) {
				var idx = letra[j] + i;
				this.casilla[idx] = new Casilla(idx, this);
			}
		this.ponePiezasIniciales();
	}

	ponePiezasIniciales() {
		//falta
		const BLANCA = true;
		const NEGRA = false;
		const BLANCO = true;
		const NEGRO = false;

		this.casilla['a1'].ocupar(new Torre(BLANCA, this.casilla['a1']));
		this.blancas.push(this.casilla['a1']);
		this.casilla['b2'].ocupar(new Torre(BLANCA, this.casilla['b2']));	
		this.blancas.push(this.casilla['b2']);
		this.casilla['c1'].ocupar(new Torre(BLANCA, this.casilla['c1']));
		this.blancas.push(this.casilla['c1']);
		this.casilla['d2'].ocupar(new Torre(BLANCA, this.casilla['d2']));
		this.blancas.push(this.casilla['d2']);
		this.casilla['e1'].ocupar(new Torre(BLANCA, this.casilla['e1']));
		this.blancas.push(this.casilla['e1']);
		this.casilla['f2'].ocupar(new Torre(BLANCA, this.casilla['f2']));
		this.blancas.push(this.casilla['f2']);
		this.casilla['g1'].ocupar(new Torre(BLANCA, this.casilla['g1']));
		this.blancas.push(this.casilla['g1']);
		this.casilla['h2'].ocupar(new Torre(BLANCA, this.casilla['h2']));
		this.blancas.push(this.casilla['h2']);

		this.casilla['a7'].ocupar(new Torre(NEGRA, this.casilla['a7']));
		this.negras.push(this.casilla['a7'].pieza);
		this.casilla['b8'].ocupar(new Torre(NEGRA, this.casilla['b8']));
		this.negras.push(this.casilla['b8'].pieza);
		this.casilla['c7'].ocupar(new Torre(NEGRA, this.casilla['c7']));
		this.negras.push(this.casilla['c7'].pieza);
		this.casilla['d8'].ocupar(new Torre(NEGRA, this.casilla['d8']));
		this.negras.push(this.casilla['d8'].pieza);
		this.casilla['e7'].ocupar(new Torre(NEGRA, this.casilla['e7']));
		this.negras.push(this.casilla['e7'].pieza);
		this.casilla['f8'].ocupar(new Torre(NEGRA, this.casilla['f8']));
		this.negras.push(this.casilla['f8'].pieza);
		this.casilla['g7'].ocupar(new Torre(NEGRA, this.casilla['g7']));
		this.negras.push(this.casilla['g7'].pieza);
		this.casilla['h8'].ocupar(new Torre(NEGRA, this.casilla['h8']));
		this.negras.push(this.casilla['h8'].pieza);

		/*
		//piezas Blancas 
		var obj = new Torre(BLANCA, this.casilla['g4']);
		this.casilla['g4'].ocupar(obj);
		obj = new Caballo(BLANCO, this.casilla['b1']);
		this.casilla['b1'].ocupar(obj);
		obj = new Alfil(BLANCO, this.casilla['c1']);
		this.casilla['c1'].ocupar(obj);
		obj = new Dama(BLANCA, this.casilla['d1']);
		this.casilla['d1'].ocupar(obj);
		obj = new Rey(BLANCO, this.casilla['e1']);
		this.casilla['e1'].ocupar(obj);
		obj = new Alfil(BLANCO, this.casilla['f1']);
		this.casilla['f1'].ocupar(obj);
		obj = new Caballo(BLANCO, this.casilla['g1']);
		this.casilla['g1'].ocupar(obj);
		obj = new Torre(BLANCA, this.casilla['h1']);
		this.casilla['h1'].ocupar(obj);

		//piezas Negras
		var obj = new Torre(NEGRA, this.casilla['c5']);
		this.casilla['c5'].ocupar(obj);
		obj = new Caballo(NEGRO, this.casilla['b8']);
		this.casilla['b8'].ocupar(obj);
		obj = new Alfil(NEGRO, this.casilla['c8']);
		this.casilla['c8'].ocupar(obj);
		obj = new Dama(NEGRA, this.casilla['d8']);
		this.casilla['d8'].ocupar(obj);
		obj = new Rey(NEGRO, this.casilla['e8']);
		this.casilla['e8'].ocupar(obj);
		obj = new Alfil(NEGRO, this.casilla['f8']);
		this.casilla['f8'].ocupar(obj);
		obj = new Caballo(NEGRO, this.casilla['g8']);
		this.casilla['g8'].ocupar(obj);
		obj = new Torre(NEGRA, this.casilla['h8']);
		this.casilla['h8'].ocupar(obj);

		//peones ambos bandos
		var idx;
		var letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		for (var k = 0; k < letra.length; k++) {
			idx = letra[k] + 2;
			obj = new Peon(BLANCO, this.casilla[idx]);
			this.casilla[idx].ocupar(obj);
			idx = letra[k] + 7;
			obj = new Peon(NEGRO, this.casilla[idx]);
			this.casilla[idx].ocupar(obj);
		}
		*/
		return true;
	}

	ocuparCasilla(casillaid, pieza) {
		pieza.casillaActual.vaciar();
		if (!this.casilla[casillaid].estaVacia() && this.casilla[casillaid].pieza.esNegro()){
			this.negras.splice(this.negras.indexOf(this.casilla[casillaid].pieza),1);
		}
        this.casilla[casillaid].vaciar();
		this.casilla[casillaid].ocupar(pieza);
		pieza.casillaActual = this.casilla[casillaid];
        pieza.yaMovido = true;
	}

	despliega() {
		return this.despliega_tabla_html();
	}

	despliega_tabla_html() {
		var idx, col;
		let str = "";
		var letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		str = '<table border="1" style="text-align:center">';
		str += '<table border="1" style="text-align:center">';
		str += '<tr>';
		for (var i = 0; i < 8; i++) {
			str += '<td height="40" width="40">' + letra[i] + '</td>';
		}
		str += '<td width="20"></td></tr>';
		for (var i = 8; i > 0; i--) {
			str += '<tr>';
			for (var j = 0; j < 8; j++) {
				if ((i + j) % 2 == 0)
					col = this.colorCasillaClara;
				else
					col = this.colorCasillaOscura;
				idx = letra[j] + i;
				str += `<td id="${this.casilla[idx].id}" height="40" style="background-color:` + col + '">';
				str += this.casilla[idx].despliega();
				str += '</td>';
			}
			str += '<td>' + i + '</td></tr>';
		}
		str += '<tr>';
		for (var i = 0; i < 8; i++) {
			str += '<td height="40">' + letra[i] + '</td>';
		}
		str += '<td></td></tr>';
		str += '</table>';
		return str;
	}
}

