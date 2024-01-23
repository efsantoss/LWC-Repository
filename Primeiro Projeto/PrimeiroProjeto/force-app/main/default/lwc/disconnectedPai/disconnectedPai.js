import { LightningElement } from 'lwc';

export default class DisconnectedPai extends LightningElement {

    show=false;

    handleClick(){
        this.show = !this.show;
    }
}