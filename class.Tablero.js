class Tablero  {

	constructor(unaPartida) {
		this.colorCasillaClara ="#e9e9e9";
		this.colorCasillaOscura = "#676767";
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
			idx = letra[k]+7;
			obj = new Peon(NEGRO,this);
			this.casilla[idx].ocupar(obj);
		}




		return true;
	}

	ocuparCasilla(casillaid,pieza){

	}

	despliega(){
		this.despliega_tabla_html();
	}

	despliega_tabla_html() {
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
				document.write('<td height="40" style="background-color:'+col+'">');
				idx = letra[j]+i;
				document.write(this.casilla[idx].despliega());
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

