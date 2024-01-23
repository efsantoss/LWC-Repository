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
        // Verificar se há resultados na busca
        if (this.contacts.data && this.contacts.data.length > 0) {
            // Exibir os resultados ou tomar a ação necessária
            console.log('Contatos encontrados:', this.contacts.data);
        } else {
            // Nenhum resultado encontrado
            console.log('Nenhum contato encontrado');
            alert('Contato inválido');
        }
    }
    
}
