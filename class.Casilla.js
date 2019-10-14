class Casilla {
    constructor(id) {
        this.id = id;
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
    ocuparCasilla(pieza) {
        if (this.estaVacia() == true) {
            this.pieza = pieza;
            alert("Se ha agregado la pieza");
        }
        else {
            alert("Casilla ocupada");
        }
    }
    estaVacia() {
        var condicion = false;
        if (this.pieza == "") {
            condicion = true;
        }
        return condicion;
    }


}
