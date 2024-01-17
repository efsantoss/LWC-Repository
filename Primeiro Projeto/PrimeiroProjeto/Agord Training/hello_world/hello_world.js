import { LightningElement } from 'lwc';

export default class Hello_world extends LightningElement {
    greeting='World';
    changeHandler(event){
        this.greeting = event.target.value;
    }
}