import { LightningElement, track} from 'lwc';

export default class Botao extends LightningElement {
    @track greeting = ' ';

    handleInputChange(event){
        this.greeting = event.target.value;
    }

    handleValidation(){
        if(this.greeting.trim() === ' '){
            alert('Por favor insira o texto')
        }else {
            alert(`Texto validado:  ${this.greeting}`);
        }
    }
}