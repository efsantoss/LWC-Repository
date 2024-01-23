import { LightningElement, api } from 'lwc';

export default class Lifecycle extends LightningElement {
    @api message = "LINDO";
    constructor(){
        super();
        console.log('Conteudo da variavel antes de ser alterado: ' + this.message);
        this.message = this.message + ' Maravilhoso';
        this.message = 'Sottelli';        
        console.log("Conteúdo da variavel apos ser alterado(msgn de dentro do construtor): " + this.message);
    }
    connectedCallback(){
        console.log('Conteudo da variavel sendo chamada dentro do connectedCallBack(): ' + this.message);
        this.message = 'uoouu'

    }

    disconnectedCallback(){
        
    }
}