class Tablero  {

	constructor(partida) {
		this.colorCasillaClara = "#d0d0d0";
		this.colorCasillaOscura = "#be2a2a";
		this.colorPiezaClara = "#a2a2a2";
		this.colorPiezaOscura = "#666690";

		this.casillas = new Array();
		this.partida = partida;

		var letra = ['a', 'b' ,'c' ,'d' ,'e' ,'f' ,'g' ,'h'];

		for(var i = 1; i <= 8; ++i) {
			for(var j = 0; j < letra.length; ++j){
				var idx = letra[j] + i;
				this.casillas[idx] = new Casilla(idx,this);
			}
		}
			
		this.poner_piezas_iniciales();
	}

	poner_piezas_iniciales() {
		//falta
		const BLANCA = true;
		const NEGRA = false;
		const BLANCO = true;
		const NEGRO = false;

		//piezas Blancas 
		new Caballo(BLANCO, this.casillas['a1']);
		new Caballo(BLANCO, this.casillas['b2']);
		new Caballo(BLANCO, this.casillas['c1']);
		new Caballo(BLANCO, this.casillas['d2']);
		new Caballo(BLANCO, this.casillas['e1']);
		new Caballo(BLANCO, this.casillas['f2']);
		new Caballo(BLANCO, this.casillas['g1']);
		new Caballo(BLANCO, this.casillas['h2']);

		//piezas Negras
		new Caballo(NEGRA, this.casillas['a8']);
		new Caballo(NEGRO, this.casillas['b7']);
		new Caballo(NEGRO, this.casillas['c8']);
		new Caballo(NEGRO, this.casillas['d7']);
		new Caballo(NEGRO, this.casillas['e8']);
		new Caballo(NEGRO, this.casillas['f7']);
		new Caballo(NEGRO, this.casillas['g8']);
		new Caballo(NEGRO, this.casillas['h7']);

		//peones ambos bandos
		// var idx;
		// var letra = ['a','b','c','d','e','f','g','h'];
		// for(var k=0; k<letra.length ; k++){
		// 	idx = letra[k]+2;
		// 	obj = new Peon(BLANCO,this);
		// 	this.casilla[idx].ocupar(obj);
		// 	idx = letra[k]+7;
		// 	obj = new Peon(NEGRO,this);
		// 	this.casilla[idx].ocupar(obj);
		// }

		return true;
	}

	ocuparCasilla(casilla_id, pieza) {

	}

	despliega() {
		this.despliega_tabla_html();
	}

	despliega_tabla_html() {
		document.writeln("<h1>Ajedrez mágico</h1>");
		var idx,col;
		var letra = ['a','b','c','d','e','f','g','h'];
		document.writeln('<table border="1" style="text-align:center">');
		document.writeln('<tr>');
		for(var i=0 ; i<8 ; i++){
			document.writeln('<td height="40" width="40">'+letra[i]+'</td>');
		}
		document.writeln('<td width="20"></td></tr>');
		for(var i=8 ; i>0 ; i--){
			document.writeln('<tr>');
			for(var j=0; j<8 ; j++){
				if((i+j)%2==0)
					col = this.colorCasillaClara;
				else
					col = this.colorCasillaOscura;
				idx = letra[j]+i;
				document.write('<td id="' + idx + '" height="40" style="background-color:'+col+'">');
				document.write(this.casillas[idx].despliega());
				document.writeln('</td>');
			}
			document.writeln('<td>'+i+'</td></tr>');
		}
		document.writeln('<tr>');
		for(var i=0 ; i<8 ; i++){
			document.writeln('<td height="40">'+letra[i]+'</td>');
		}
		document.writeln('<td></td></tr>');
		document.writeln('</table>')
	}
}
