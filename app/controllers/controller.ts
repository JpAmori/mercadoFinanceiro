import Negociacao from "../models/negociacao.js";

export class NegociacaoController {
    private inputDate: any;
    private inputAmount: any;
    private inputValue: any;

    constructor(){
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }

    methodAdd (){
        const negociacao = new Negociacao(
            this.inputDate.value,
            this.inputAmount.value,
            this.inputValue.value,
        )
         console.log(negociacao);
    }
}

export default NegociacaoController;