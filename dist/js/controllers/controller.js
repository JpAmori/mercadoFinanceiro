// Importando outros arquivos
import { Negociacoes } from "../models/listanegociacoes.js";
import Negociacao from "../models/negociacao.js";
import NegociacoesView from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negotiations = new Negociacoes();
        this.negotiationsViews = new NegociacoesView('#negotiationsViews');
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotiationsViews.update();
    }
    // Adicionar Negociação / Armazenar Negociação
    methodAdd() {
        const negotiation = this.createNegotiation();
        this.negotiations.Add(negotiation);
        console.log(this.negotiations.list());
        const negociacao = this.createNegotiation();
        negociacao.data.setDate(29);
        this.negotiations.Add(negociacao);
        console.log(this.negotiations.list());
        this.cleanNegotiation();
    }
    // Criar negociação
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociacao(date, amount, value);
    }
    // Limpar negociação
    cleanNegotiation() {
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus();
    }
}
export default NegociacaoController;
