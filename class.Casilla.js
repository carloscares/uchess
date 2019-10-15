class Casilla {
    constructor(id, tablero) {
        this.id = id;
        this.tablero=tablero;
        this.pieza = "";
    }
    ocupadaBlanco() {
        var condicion = false;
        if (this.estaVacia() == false) {
            condicion = this.pieza.esBlanco();
        }
        return condicion;
    }
    ocupadaNegro() {
        var condicion = false;
        if (this.estaVacia() == false) {
            condicion = this.pieza.esNegra();
        }
        return condicion;
    }
    ocupar(objetoPieza) {
        if (this.estaVacia() == true) {
            this.pieza = objetoPieza;
            //alert("Se ha agregado la pieza");
        }
        else {
            //alert("Casilla ocupada");
        }
    }

    vaciar() {
        this.pieza="";
    }

    estaVacia() {
        return this.pieza == ""
    }


    //abstract
    despliega() {
        if(this.estaVacia()){
            return '';
        }
        else {
            return this.pieza.despliega();
        }        
    }


}

