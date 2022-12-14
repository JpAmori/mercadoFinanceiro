
// Importando outros arquivos

import { DiadaSemana } from "../enums/dias-da-semana.js";
import { Negociacoes } from "../models/listanegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    private inputDate: HTMLInputElement;
    private inputAmount: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negociacoes();
    private negotiationsViews = new NegociacoesView('#negotiationsViews', true);
    private messageView = new MensagemView('#mensagemView');

    constructor(){
        this.inputDate = document.querySelector('#data');
        this.inputAmount = document.querySelector('#quantidade');
        this.inputValue = document.querySelector('#valor');
        this.negotiationsViews.update(this.negotiations);
    }
    // Adicionar Negociação / Armazenar Negociação
    public methodAdd (): void{
        
        const negotiation = Negociacao.criateDe(
            this.inputDate.value,
            this.inputAmount.value,
            this.inputValue.value,
        )
        if (!this.DiaUtil(negotiation.data)) {
            this.messageView.update('Só serão aceitas as negociações em dias úteis');
            this.cleanNegotiation();
            return;
        }else{
            this.negotiations.Add(negotiation);
            console.log(this.negotiations);
            console.log(negotiation.data);
            this.updateView();
            this.cleanNegotiation();
        }
        
                 
    }

    private DiaUtil(data: Date){
       return data.getDay() > DiadaSemana.DOMINGO && data.getDay() < DiadaSemana.SABADO;
    }

    // Limpar negociação
    cleanNegotiation (): void{
        this.inputDate.value = '';
        this.inputAmount.value = '0';
        this.inputValue.value = '0';
        this.inputDate.focus()
    }
    // Atualiza as Views
    private updateView (): void{
        this.negotiationsViews.update(this.negotiations);
        this.messageView.update('Negociação realizada com Sucesso');
    }
}

export default NegociacaoController;