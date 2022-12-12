import { Negociacoes } from "../models/listanegociacoes.js";
import Negociacao from "../models/negociacao.js";
export class NegociacaoController {
    constructor() {
        this.negotiations = new Negociacoes();
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
    }
    methodAdd() {
        const negotiation = this.createNegotiation();
        this.negotiations.Add(negotiation);
        console.log(this.negotiations.list());
        this.cleanNegotiation();
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociacao(date, amount, value);
    }
    cleanNegotiation() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
export default NegociacaoController;
