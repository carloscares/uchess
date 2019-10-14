class Tablero  {

	constructor(unaPartida) {
		this.colorCasillaClara ="#eeeeee";
		this.colorCasillaOscura = "#444444";
		this.colorPiezaClara = "#a2a2a2";
		this.colorPiezaOscura = "#666690";
		this.casilla = new Array();
		this.miPartida=unaPartida;
		var letra = ['a','b','c','d','e','f','g','h'];
		for(var i=1 ; i<=8 ;i++)
			for(var j=0 ; j< letra.length ; j++ ){
				var idx = letra[j]+i;
				this.casilla[idx] = new Casilla(idx,this);
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
		var obj = new Torre(BLANCA,this);
		this.casilla['a1'].ocupar(obj);
		obj = new Caballo(BLANCO,this);
		this.casilla['b1'].ocupar(obj);
		obj = new Alfil(BLANCO,this);
		this.casilla['c1'].ocupar(obj);
		obj = new Dama(BLANCA,this);
		this.casilla['d1'].ocupar(obj);
		obj = new Rey(BLANCO,this);
		this.casilla['e1'].ocupar(obj);
		obj = new Alfil(BLANCO,this);
		this.casilla['f1'].ocupar(obj);
		obj = new Caballo(BLANCO,this);
		this.casilla['g1'].ocupar(obj);
		obj = new Torre(BLANCA,this);
		this.casilla['h1'].ocupar(obj);
		
		//piezas Negras
		var obj = new Torre(NEGRA,this);
		this.casilla['a8'].ocupar(obj);
		obj = new Caballo(NEGRO,this);
		this.casilla['b8'].ocupar(obj);
		obj = new Alfil(NEGRO,this);
		this.casilla['c8'].ocupar(obj);
		obj = new Dama(NEGRA,this);
		this.casilla['d8'].ocupar(obj);
		obj = new Rey(NEGRO,this);
		this.casilla['e8'].ocupar(obj);
		obj = new Alfil(NEGRO,this);
		this.casilla['f8'].ocupar(obj);
		obj = new Caballo(NEGRO,this);
		this.casilla['g8'].ocupar(obj);
		obj = new Torre(NEGRA,this);
		this.casilla['h8'].ocupar(obj);

		//peones ambos bandos
		var idx;
		var letra = ['a','b','c','d','e','f','g','h'];
		for(var k=0; k<letra.length ; k++){
			idx = letra[k]+2;
			obj = new Peon(BLANCO,this);
			this.casilla[idx].ocupar(obj);
			idx = letra[k]*7;
			obj = new Peon(NEGRO,this);
			this.casilla[idx].ocupar(obj);
		}



		return true;
	}

	ocuparCasilla(casillaid,pieza){

	}

	despliega(){
		despliega_tabla_html();
	}

	desliega_tabla_html() {
		var idx;
		var letra = ['a','b','c','d','e','f','g','h'];
		document.writeln('<table border="1">');
		for(var i=8 ; i>0 ; i--){
			document.writeln('<tr>');
			for(var j=0; j<=8 ; j++){
				document.write('<td>');
				idx = letra[j]+i;
				document.write(this.casilla[idx].despliega());
				document.writeln('</td>');
			}
			document.writeln('</tr>');
		}
		document.writeln('</table>')
	}
}
