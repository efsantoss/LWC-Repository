import { LightningElement, track } from 'lwc';

export default class Idade extends LightningElement {

    @track firstName = ' ';
    @track middleName = ' ';
    @track lastName = ' ';

    @track dob = ' ';
    @track fullName = ' ';
    @track age = ' ';

    handlerFirstNameChange(event){
        this.firstName = event.target.value;
        this.updateFullName();
    }

    handlerMidleNameChange(event){
        this.middleName = event.target.value;
        this.updateFullName();
    }

    handlerLastNameChange(event){
        this.lastName = event.target.value;
        this.updateFullName();
    }

    handleDobChange(event){
        this.dob = event.target.value;
        this.calculateAge();
    }

    updateFullName(){
        this.fullName = `${this.firstName} ${this.middleName} ${this.lastName}` .trim();
    }

    calculateAge(){
        const currentDate = new Date();
        const birthDate = new Date(this.dob);
        const ageDiff = currentDate.getFullYear() - birthDate.getFullYear();

        this.age = ageDiff;
    }
}

