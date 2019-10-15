class Tablero  {

	constructor(unaPartida) {
		this.colorCasillaClara ="#e1ba6b";
		this.colorCasillaOscura = "#a87612";
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
		var obj = new Torre(BLANCA,this.casilla['a1']);
		obj = new Caballo(BLANCO,this.casilla['b1']);
		obj = new Alfil(BLANCO,this.casilla['c1']);
		obj = new Dama(BLANCA,this.casilla['d1']);
		obj = new Rey(BLANCO,this.casilla['e1']);
		obj = new Alfil(BLANCO,this.casilla['f1']);
		obj = new Caballo(BLANCO,this.casilla['g1']);
		obj = new Torre(BLANCA,this.casilla['h1']);
		//piezas Negras
		var obj = new Torre(NEGRA,this.casilla['c6']);
		obj = new Caballo(NEGRO,this.casilla['b8']);
		obj = new Alfil(NEGRO,this.casilla['c8']);
		obj = new Dama(NEGRA,this.casilla['d8']);
		obj = new Rey(NEGRO,this.casilla['e8']);
		obj = new Alfil(NEGRO,this.casilla['f8']);
		obj = new Caballo(NEGRO,this.casilla['g8']);
		obj = new Torre(NEGRA,this.casilla['h8']);

		//peones ambos bandos
		var idx;
		var letra = ['a','b','c','d','e','f','g','h'];

		for(var k=0; k<letra.length ; k++){
            idx = letra[k]+2;
            obj = new Peon(BLANCO,this.casilla[idx]);
            idx = letra[k]+7;
            obj = new Peon(NEGRO,this.casilla[idx]);
        }
		obj= new Peon(NEGRA,this.casilla['e6']);



		return true;
	}

	ocuparCasilla(casillaid,pieza){

	}
    jugadasTorre(){

		return this.casilla["c6"].pieza.puedeJugar();
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

