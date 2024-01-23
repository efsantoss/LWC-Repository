import { LightningElement } from 'lwc';

export default class DisconnectedFilho extends LightningElement {
    connectedCallback(){
        alert('Mensagem do connectedcallback do componente filho');
    }
}