class Pieza {

    constructor(trueSiBlanca, casillaContenedora){
        this.color = trueSiBlanca;
        this.casillaActual = casillaContenedora;
        this.casillaActual.ocupar(this);
        this.yaMovido = false;
    }

    //abstract
    puedeJugar(){

    }

    despliega() {
        
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

