class Tablero {

	constructor(unaPartida) {
		this.colorCasillaClara = "#FFFFFF";
		this.colorCasillaOscura = "#FF00FF";
		this.colorPiezaClara = "#a2a2a2";
		this.colorPiezaOscura = "#666690";
		this.casilla = new Array();
		this.miPartida = unaPartida;
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

		this.casilla['d2'].vaciar();

		return true;
	}

	ocuparCasilla(casillaid, pieza) {

	}

	despliega() {
		this.despliega_tabla_html();
	}

	despliega_tabla_html() {
		var idx, col;
		var letra = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
		document.writeln('<table border="1" style="text-align:center">');
		document.writeln('<tr>');
		for (var i = 0; i < 8; i++) {
			document.writeln('<td height="40" width="40">' + letra[i] + '</td>');
		}
		document.writeln('<td width="20"></td></tr>');
		for (var i = 8; i > 0; i--) {
			document.writeln('<tr>');
			for (var j = 0; j < 8; j++) {
				if ((i + j) % 2 == 0)
					col = this.colorCasillaClara;
				else
					col = this.colorCasillaOscura;
				idx = letra[j] + i;
				document.write(`<td id="${this.casilla[idx].id}" height="40" style="background-color:` + col + '">');
				document.write(this.casilla[idx].despliega());
				document.writeln('</td>');
			}
			document.writeln('<td>' + i + '</td></tr>');
		}
		document.writeln('<tr>');
		for (var i = 0; i < 8; i++) {
			document.writeln('<td height="40">' + letra[i] + '</td>');
		}
		document.writeln('<td></td></tr>');
		document.writeln('</table>')
	}
}

