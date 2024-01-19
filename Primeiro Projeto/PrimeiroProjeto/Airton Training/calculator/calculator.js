import { LightningElement, track } from 'lwc';

export default class Calculator extends LightningElement {
    @track primeiroNumero = ' ';
    @track segundoNumero = ' ';
    @track result = ' '; 
    result;


    changeNumber1(event){
        this.primeiroNumero = event.target.value;

    }
    changeNumber2(event){
        this.segundoNumero = event.target.value;
        
    }

    handleSoma(event){
        this.result = Number(this.primeiroNumero) + Number(this.segundoNumero);
    }
    handleMult(event){
        this.result = Number(this.primeiroNumero * this.segundoNumero)
    }
    handleSub(event){
        this.result = Number(this.primeiroNumero - this.segundoNumero)
    }
    handleDivide(event){
        this.result = Number(this.primeiroNumero % this.segundoNumero)
    }



}