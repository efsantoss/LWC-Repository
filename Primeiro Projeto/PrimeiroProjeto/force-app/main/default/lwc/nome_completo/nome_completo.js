import { LightningElement, track } from 'lwc';

export default class Hello_world extends LightningElement {
    @track nome = ' ';
    @track sobrenome = ' ';

    get nomeCompleto(){
        return this.nome + ' ' + this.sobrenome;
    }

    handlerNomeChange(event){
        this.nome = event.target.value;
    }
    handlerSobrenomeChange(event){
        this.sobrenome = event.target.value;
    }
}