import { LightningElement, api, track } from 'lwc';
import createContact from '@salesforce/apex/Ito.createContact';

export default class ItoChallange extends LightningElement {
    @track createdName = '';
    @track createdId = '';
    @track createdLastName = ' ';

    handleInputName(event) {
        this.createdName = event.target.value;
    }

    handleInputLastName(event) {
        this.createdLastName = event.target.value;
    }

    handleClickPF(){
        createContact({ firstName: this.createdName, lastName: this.createdLastName })
        .then(result => {
            // Alerta para mostrar na tela 
            alert(result);

            const successEvent = new CustomEvent('successcontactcreated', {
                detail: { message: 'Contato inserido com sucesso!' }
            });
            this.dispatchEvent(successEvent);
        })
        .catch(error => {
            console.error(error);
            alert('Erro ao inserir contato');
        });
    }

    handleClickPJ(){
        createContact({ firstName: this.createdName, lastName: this.createdLastName })
        .then(result => {
            // Alerta para mostrar na tela 
            alert(result);

            const successEvent = new CustomEvent('successcontactcreated', {
                detail: { message: 'Contato inserido com sucesso!' }
            });
            this.dispatchEvent(successEvent);
        })
        .catch(error => {
            console.error(error);
            alert('Erro ao inserir contato');
        });
    }
}