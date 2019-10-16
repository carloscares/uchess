class Caballo extends Pieza {

	constructor(trueSiBlanca,casillaContenedora){
		super(trueSiBlanca,casillaContenedora);
	}

	despliega() {
		if(this.esBlanco())
			return "C-B";
		else
			return "C-N";
	}

	puedeJugar(){
		var posiblesJugadas = [];
		var c = this.obtenerCasilla();
		var actual = c.id;
		var array = actual.split("");
		var row = parseInt(array[1],10); // es el numero
		
		var col = array[0]; // es la letra
		// casillas del tablero: 
		var cas = c.tablero.casilla;

		// para la primera casilla posible
		var row1 = this.rowArriba(row);
		var col1 = this.colAntecesor(col);
		if(row1!=10){
			if(col1!='x'){
				var ai = col1+row1;			
				if(this.color){
					if(cas[ai].ocupadaBlanco() === false){

						posiblesJugadas.push(cas[ai]);		
					}
				}
				if(this.color === false){
					if(cas[ai].ocupadaNegro() === false){
						posiblesJugadas.push(cas[ai]);
					}
				}
				
			}
		}

		//para la segunda casilla posible
		var row2 = this.rowArriba(row);
		var col2 = this.colSucesor(col);
		if(row2!=10){
			if(col2!='x'){
				var ad = col2+row2;
				if(this.color){
					if(cas[ad].ocupadaBlanco() === false){
						posiblesJugadas.push(cas[ad]);		
					}
				}
				if(this.color === false){
					if(cas[ad].ocupadaNegro() === false){
						posiblesJugadas.push(cas[ad]);
					}
				}
			}
		}

		//para la tercera casilla posible
		var row3 = this.rowAbajo(row);
		var col3 = this.colAntecesor(col);
		if(row3!=10){
			if(col3!='x'){
				var bi = col3+row3;
				if(this.esBlanca()){
					if(!cas[bi].ocupadaBlanco()){
						posiblesJugadas.push(cas[bi]);	
					}

				}
				if(this.color === false){

					if(cas[bi].ocupadaNegro() === false){
						posiblesJugadas.push(cas[bi]);
					}
				}
			}
		}

		//para la cuarta casilla posible
		var row4 = this.rowAbajo(row);
		var col4 = this.colSucesor(col);
		if(row4!=10){
			if(col4!='x'){
				var bd = col4+row4;
				if(this.color){
					if(cas[bd].ocupadaBlanco() === false){
						posiblesJugadas.push(cas[bd]);		
					}
				}
				if(this.color === false){
					if(cas[bd].ocupadaNegro() === false){
						posiblesJugadas.push(cas[bd]);
					}
				}
			}
		}


		//para la quinta casilla posible
		var row5 = this.rowSucesor(row);
		var col5 = this.colIzquierda(col);
		if((row5!=10)&&(col5!='x')){
			var ia = col5+row5;
			if((this.color)&&(!cas[ia].ocupadaBlanco())){
				posiblesJugadas.push(cas[ia]);
			}
			if((!this.color)&&(!cas[ia].ocupadaNegro())){
				posiblesJugadas.push(cas[ia]);
			}
		}

		//para la sexta casilla posible
		var row6 = this.rowAntecesor(row);
		var col6 = this.colIzquierda(col);
		if((row6!=10)&&(col6!='x')){
			var nm = col6+row6;
			if((this.color)&&(!cas[nm].ocupadaBlanco())){
				posiblesJugadas.push(cas[nm]);
			}
			if((!this.color)&&(!cas[nm].ocupadaNegro())){
				posiblesJugadas.push(cas[nm]);
			}
		}

		//para la septima casilla posible
		var row7 = this.rowSucesor(row);
		var col7 = this.colDerecha(col);
		if((row7!=10)&&(col7!='x')){
			var nnm = col7+row7;
			if((this.color)&&(!cas[nnm].ocupadaBlanco())){
				posiblesJugadas.push(cas[nnm]);
			}
			if((!this.color)&&(!cas[nnm].ocupadaNegro())){
				posiblesJugadas.push(cas[nnm]);
			}
		}

		//para la octaba casilla posible
		var row8 = this.rowAntecesor(row);
		var col8 = this.colDerecha(col);
		if((row8!=10)&&(col8!='x')){
			var fn = col8+row8;
			if((this.color)&&(!cas[fn].ocupadaBlanco())){
				posiblesJugadas.push(cas[fn]);
			}
			if((!this.color)&&(!cas[fn].ocupadaNegro())){
				posiblesJugadas.push(cas[fn]);
			}
		}

		return posiblesJugadas;

	}



	mostrarPosibles(){
		var posibles = this.puedeJugar();	
		var resPos = [];
		posibles.forEach(function(element){
			resPos.push(element.id);
		});
		return resPos;
	}

	transformarLetra(letra){
		if(letra === 'a'){
			return 1;
		}
		if(letra === 'b'){
			return 2;
		}
		if(letra === 'c'){
			return 3;
		}
		if(letra === 'd'){
			return 4;
		}
		if(letra === 'e'){
			return 5;
		}
		if(letra === 'f'){
			return 6;
		}
		if(letra === 'g'){
			return 7;
		}
		if(letra === 'h'){
			return 8;
		}
	}

	tranformarNumero(numero){
		if(numero === 1){
			return 'a';
		}
		if(numero === 2){
			return 'b';
		}
		if(numero === 3){
			return 'c';
		}
		if(numero === 4){
			return 'd';
		}
		if(numero === 5){
			return 'e';
		}
		if(numero === 6){
			return 'f';
		}
		if(numero === 7){
			return 'g';
		}
		if(numero === 8){
			return 'h';
		}
	}

	colSucesor(col){
		var num = this.transformarLetra(col);
		if((num+1)<9){
			return this.tranformarNumero(num+1);
		}else{
			return 'x';
		}
		
	}

	colAntecesor(col){
		var num = this.transformarLetra(col);
		if((num-1)>0){
			return this.tranformarNumero(num-1);
		}else{
			return 'x';
		}
	}

	rowAntecesor(row){
		if((row-1)>0){
			return (row-1);
		}else{
			return 10;
		}
	}

	rowSucesor(row){
		if((row+1)<9){
			return (row+1);
		}else{
			return 10;
		}
	}

	colDerecha(col){
		var num = this.transformarLetra(col);
		if((num+2)<9){
			return this.tranformarNumero(num+2);
		}else{
			return 'x';
		}
	}

	colIzquierda(col){
		var num = this.transformarLetra(col);
		if((num-2)>0){
			return this.tranformarNumero(num-2);
		}else{
			return 'x';
		}
	}

	rowArriba(row){
		if((row+2)<9){
			return (row+2);
		}else{
			return 10;
		}
	}

	rowAbajo(row){
		if((row-2)>0){
			return (row-2);
		}else{
			return 10;
		}
	}






}

