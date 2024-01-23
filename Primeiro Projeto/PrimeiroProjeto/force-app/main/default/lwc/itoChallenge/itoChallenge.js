import { LightningElement, track } from 'lwc';
import createContact from '@salesforce/apex/Ito.createContact';

export default class ItoChallange extends LightningElement {
    @track createdName = '';
    @track createdLastName = '';
    @track createdDocument = '';
    @track selectedType = '';

    get documentLabel() {
        return 'Documento';
    }

    handleInputName(event) {
        this.createdName = event.target.value;
    }

    handleInputLastName(event) {
        this.createdLastName = event.target.value;
    }

    handleInputDocument(event) {
        this.createdDocument = event.target.value;

        // Verificar o número de dígitos e determinar se é CPF ou CNPJ
        if (this.createdDocument.length === 11) {
            this.selectedType = 'PessoaFisica__c';
        } else if (this.createdDocument.length === 14) {
            this.selectedType = 'PessoaJuridica__c';
        } else {
            // Zerar o tipo se não for nem CPF nem CNPJ
            this.selectedType = '';
        }
    }

    handleTypeChange(event) {
        this.selectedType = event.target.value;
    }

    handleClick() {
        // Verificar se o CPF ou CNPJ foi fornecido com base no tipo selecionado
        if (!this.createdDocument || !this.selectedType) {
            alert('Digite um CPF ou CNPJ válido antes de criar o contato.');
            return;
        }

        // Chamar o método Apex para criar o contato com base no tipo (PF ou PJ)
        createContact({
            firstName: this.createdName,
            lastName: this.createdLastName,
            contactType: this.selectedType,
            document: this.createdDocument
        })
        .then(result => {
            // Exibir mensagem de sucesso
            alert(`Contato ${this.selectedType === 'PessoaFisica__c' ? 'CPF' : 'CNPJ'} inserido com sucesso!`);

            // Disparar um evento personalizado para notificar outros componentes, se necessário
            const successEvent = new CustomEvent('successcontactcreated', {
                detail: { message: 'Contato inserido com sucesso!' }
            });
            this.dispatchEvent(successEvent);
        })
        .catch(error => {
            // Tratar erros aqui, se necessário
            console.error(error);
            alert('Erro ao inserir contato');
        });
    }
}
