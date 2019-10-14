
class Pieza{

    constructor(trueSiBlanca, casillaActual){
        this.color = trueSiBlanca;
        this.casillaActual = casillaActual;
        this.yaMovido = false;
    }

    //abstract
    puedeJugar(){

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

    obtenerCasilla(){
        return this.casillaActual;
    }
}