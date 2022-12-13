
// Importando outros arquivos

import { Negociacoes } from "../models/listanegociacoes.js";
import Negociacao from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import NegociacoesView from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputDate: HTMLInputElement;
    private inputAmount: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negociacoes();
    private negotiationsViews = new NegociacoesView('#negotiationsViews');
    private messageView = new MensagemView('#mensagemView');

    constructor(){
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotiationsViews.update(this.negotiations);
    }
    // Adicionar Negociação / Armazenar Negociação
    methodAdd (): void{

        const negotiation = this.createNegotiation();
        this.negotiations.Add(negotiation);
        this.negotiationsViews.update(this.negotiations);
        this.cleanNegotiation();

    }
    // Criar negociação
    createNegotiation (): Negociacao{
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ','));
        const amount = parseInt(this.inputAmount.value);
        const value = parseFloat(this.inputValue.value);
        return new Negociacao(date, amount, value)
    }
    // Limpar negociação
    cleanNegotiation (): void{
        this.inputDate.value = '';
        this.inputAmount.value = '';
        this.inputValue.value = '';
        this.inputDate.focus()
    }
}

export default NegociacaoController;