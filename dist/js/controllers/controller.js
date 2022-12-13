// Importando outros arquivos
import { Negociacoes } from "../models/listanegociacoes.js";
import Negociacao from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negotiations = new Negociacoes();
        this.negotiationsViews = new NegociacoesView('#negotiationsViews');
        this.messageView = new MensagemView('#mensagemView');
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotiationsViews.update(this.negotiations);
    }
    // Adicionar Negociação / Armazenar Negociação
    methodAdd() {
        const negotiation = this.createNegotiation();
        if (!this.DiaUtil(negotiation.data)) {
            this.messageView.update('Só serão aceitas as negociações em dias úteis');
            this.cleanNegotiation();
            return;
        }
        this.negotiations.Add(negotiation);
        this.updateView();
        this.cleanNegotiation();
    }
    DiaUtil(data) {
        return data.getDay() > 0 && data.getDay() < 6;
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
    // Atualiza as Views
    updateView() {
        this.negotiationsViews.update(this.negotiations);
        this.messageView.update('Negociação realizada com Sucesso');
    }
}
export default NegociacaoController;
