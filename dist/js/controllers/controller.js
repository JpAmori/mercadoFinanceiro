import { DiadaSemana } from "../enums/dias-da-semana.js";
import { Negociacoes } from "../models/listanegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
export class NegociacaoController {
    constructor() {
        this.negotiations = new Negociacoes();
        this.negotiationsViews = new NegociacoesView('#negotiationsViews', true);
        this.messageView = new MensagemView('#mensagemView');
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotiationsViews.update(this.negotiations);
    }
    methodAdd() {
        const negotiation = Negociacao.criateDe(this.inputDate.value, this.inputAmount.value, this.inputValue.value);
        if (!this.DiaUtil(negotiation.data)) {
            this.messageView.update('Só serão aceitas as negociações em dias úteis');
            this.cleanNegotiation();
            return;
        }
        else {
            this.negotiations.Add(negotiation);
            console.log(this.negotiations);
            console.log(negotiation.data);
            this.updateView();
            this.cleanNegotiation();
        }
    }
    DiaUtil(data) {
        return data.getDay() > DiadaSemana.DOMINGO && data.getDay() < DiadaSemana.SABADO;
    }
    cleanNegotiation() {
        this.inputDate.value = '';
        this.inputAmount.value = '0';
        this.inputValue.value = '0';
        this.inputDate.focus();
    }
    updateView() {
        this.negotiationsViews.update(this.negotiations);
        this.messageView.update('Negociação realizada com Sucesso');
    }
}
export default NegociacaoController;
