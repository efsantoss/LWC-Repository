import { LightningElement } from 'lwc';

export default class HELLO extends LightningElement {
    greeting="Hello World";
    changeHandler(event){
        this.greeting = event.target.value;
    }
}