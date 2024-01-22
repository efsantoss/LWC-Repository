import { LightningElement, wire, track, api } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import CONTACT_NAME_FIELD from '@salesforce/schema/Contact.Name';
import CONTACT_ID_FIELD from '@salesforce/schema/Contact.Id';

export default class ItoChallenge extends LightningElement {

    @track createdName = '';
    @track createdId = '';

    @api contactId;
    @wire(getRecord, {
        recordId: '$contactId',
        fields: [CONTACT_NAME_FIELD, CONTACT_ID_FIELD]
    })
    contact;

    get name() {
        return this.contact.data.fields.Name.value;
    }

    get id() {
        return this.contact.data.fields.Id.value;
    }

    handleInputName(event) {
        this.createdName = event.target.value;
    }

    handleInputId(event) {
        this.createdId = event.target.value;
    }

    handleClick() {
        // Chame o método Apex para salvar o contato com os valores inseridos
    }
}
