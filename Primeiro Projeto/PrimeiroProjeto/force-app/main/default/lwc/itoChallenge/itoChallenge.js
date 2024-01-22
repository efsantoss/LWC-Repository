import { LightningElement, api, track } from 'lwc';
import createContact from '@salesforce/apex/Ito.createContact';

export default class ItoChallange extends LightningElement {
    @track createdName = '';
    @track createdId = '';

    handleInputName(event) {
        this.createdName = event.target.value;
    }

    handleInputLastName(event) {
        this.createdLastName = event.target.value;
    }

    handleClick() {
        createContact({ firstName: this.createdName, lastName: this.createdLastName })
            .then(result => {
                // Tratamento do resultado, como exibir uma mensagem de sucesso
                alert(result);

                // Disparar um evento personalizado para notificar outros componentes, se necessário
                const successEvent = new CustomEvent('successcontactcreated', {
                    detail: { message: 'Contato inserido com sucesso!' }
                });
                this.dispatchEvent(successEvent);
            })
            .catch(error => {
                // Tratamento de erro, como exibir uma mensagem de erro
                console.error(error);
                alert('Erro ao inserir contato');
            });
    }
}