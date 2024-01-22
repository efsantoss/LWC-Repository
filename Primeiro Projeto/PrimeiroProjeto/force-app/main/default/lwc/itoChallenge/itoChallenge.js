import { LightningElement, api, track } from 'lwc';
import createContact from '@salesforce/apex/Ito.createContact';

export default class ItoChallange extends LightningElement {
    @track createdName = '';
    @track createdId = '';

    handleInputName(event) {
        this.createdName = event.target.value;
    }

    handleInputId(event) {
        this.createdId = event.target.value;
    }

    handleClick() {
        createContact({ name: this.createdName, contactId: this.createdId })
            .then(result => {
                // Tratamento do resultado, como exibir uma mensagem de sucesso
                alert('Contato inserido com sucesso');
            })
            .catch(error => {
                // Tratamento de erro, como exibir uma mensagem de erro
                console.error(error);
                alert('Erro ao inserir contato');
            });
    }
}
