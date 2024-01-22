import { LightningElement, wire, track, api } from 'lwc';
import { getContact } from 'lightning/uiContactApi';
import ContactName from '@salesforce/schema/Contact.Name';

export default class ItoChallenge extends LightningElement {

    @track createdName = ' ';
    @track createdId = ' ';

    @api contactId;
    @wire(getContact, { ContactName:`$contactId`, fields: Contacts })
    contact;
    get name() {
        return this.contact.data.fields.Name.value;
    }
    get id() {
        return this.contact.data.fields.id.value;
    }


}