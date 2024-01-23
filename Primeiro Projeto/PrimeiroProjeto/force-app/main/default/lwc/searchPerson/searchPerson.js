import { LightningElement, track, wire } from 'lwc';
import searchContacts from '@salesforce/apex/SearchContact.searchContacts';

export default class searchPerson extends LightningElement {
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
        // Lógica de manipulação dos resultados da busca, se necessário
        if (this.contacts.data && this.contacts.data.length > 0) {
            console.log('Contatos encontrados:', this.contacts.data);
        } else {
            console.log('Nenhum contato encontrado');
        }
    }
}
