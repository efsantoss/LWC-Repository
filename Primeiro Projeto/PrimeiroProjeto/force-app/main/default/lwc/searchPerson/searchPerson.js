import { LightningElement, track, wire } from 'lwc';
import searchContacts from '@salesforce/apex/SearchContact.searchContacts';

export default class SearchPerson extends LightningElement {
    @track searchName = '';
    @track searchLastName = '';
    @track searchDocument = '';

    get documentLabel() {
        return 'Documento';
    }

    // Utilize o @wire para buscar contatos com base nas informações fornecidas
    @wire(searchContacts, { firstName: '$searchName', lastName: '$searchLastName', document: '$searchDocument' })
    contacts;

    handleInputName(event) {
        this.searchName = event.target.value;
    }

    handleInputLastName(event) {
        this.searchLastName = event.target.value;
    }

    handleInputDocument(event) {
        this.searchDocument = event.target.value;
    }

    handleClick() {
        // Verificar se há resultados na busca
        if (this.contacts.data && this.contacts.data.length > 0) {
            // Obter o primeiro contato encontrado
            const firstContact = this.contacts.data[0];

            // Exibir informações do contato encontrado
            const alertMessage = `Nome: ${firstContact.FirstName}\nSobrenome: ${firstContact.LastName}\nTipo: ${firstContact.PessoaJuridica__c || firstContact.PessoaFisica__c || 'Documento Faltante'}`;
            alert(alertMessage);
        } else {
            // Nenhum resultado encontrado
            alert('Documento Faltante');
        }
    }
}
