import { Negociacoes } from "../models/listanegociacoes.js";
import Negociacao from "../models/negociacao.js";

export class NegociacaoController {
    private inputDate: HTMLInputElement;
    private inputAmount: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negociacoes();

    constructor(){
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }

    methodAdd (): void{
        const negotiation = this.createNegotiation();
        this.negotiations.Add(negotiation);
        console.log(this.negotiations.list())
        this.cleanNegotiation();
    }

    createNegotiation (): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociacao(date, amount, value)
    }

    cleanNegotiation (): void{
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus()
    }
}

export default NegociacaoController;