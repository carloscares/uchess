
class Pieza {

    constructor(trueSiBlanca, casillaContenedora){
        this.color = trueSiBlanca;
        this.casillaActual = casillaContenedora;
        this.yaMovido = false;
    }

    //abstract
    puedeJugar(){
        return null;
    }

    esBlanco(){
        if(this.color === true){
            return true;
        } else {
            return false;
        }
    }

    esNegro(){
        if(this.color === false){
            return true;
        } else {
            return false;
        }
    }

    seHaMovido(){
        return this.yaMovido;
    }

    esBlanca(){
        return this.esBlanco();
    }

    esNegra() {
        return this.esNegro();
    }

    obtenerCasilla(){
        return this.casillaActual;
    }
}

