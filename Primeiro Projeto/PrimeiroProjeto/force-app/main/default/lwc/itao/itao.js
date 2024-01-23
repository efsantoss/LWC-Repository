import { LightningElement, track, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import criarContato from '@salesforce/apex/Itao.criarContato';

export default class SeuComponente extends LightningElement {
  
    @track nome = '';
    @track sobrenome = '';
    @track cpf = ''; 
    @track cnpj = ''; 
    @track isPF = false;
    @track isPessoaJuridica = false;

    @wire(getRecord, { recordId: '$ultimoContatoId', fields: ['Contact.FirstName', 'Contact.LastName', 'Contact.CPF__c', 'Contact.CNPJ__c'] })
    ultimoContato;

    get mostrarBotaoInserir() {
        return this.isPF || this.isPessoaJuridica;
    }

    handleClick(event) {
        const buttonClicked = event.target.title;

        if (buttonClicked === 'pessoaF') {
            this.isPF = true;
            this.isPessoaJuridica = false;
        } else if (buttonClicked === 'pessoaJ') {
            this.isPF = false;
            this.isPessoaJuridica = true;
        }
    }

    onHandleNome(event){
        this.nome = event.target.value;
    }
    
    onHandleSobrenome(event){
        this.sobrenome = event.target.value;
    }

    onHandleCPForCNPJ(event){
        if (this.isPF) {
            this.cpf = event.target.value;
        } else {
            this.cnpj = event.target.value;
        }
    }

    handleInserirContato() {
        console.log(this.nome, this.sobrenome, this.isPF);
        alert("Contato inserido!");

        const contatoObj = {
            tipoPessoa: this.isPF ? 'Fisica' : 'Juridica',
            nome: this.nome,
            sobrenome: this.sobrenome,
            documento: this.isPF ? this.cpf : this.cnpj
        }

        criarContato(contatoObj)
        .then(result => {
            console.log(result);
            this.ultimoContatoId = result; 
            
        })
        .catch(error => {
            console.error(error);
        });
    }
    
    checkLastContact(contactId) {
        getLastContact(contactId)
        .then(result => console.log(result))
        .catch(error => console.log(error))
    }
}