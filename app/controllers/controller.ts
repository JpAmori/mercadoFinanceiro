
// Importando outros arquivos

import { domInject } from "../decorators/inject.js";
import { inspect } from "../decorators/inspect.js";
import { loginTimeExecution } from "../decorators/logar-tempo-de-execucao.js";
import { DiadaSemana } from "../enums/dias-da-semana.js";
import { Negociacoes } from "../models/listanegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";

export class NegociacaoController {
    @domInject('#data')
    private inputDate: HTMLInputElement;
    @domInject('#quantidade')
    private inputAmount: HTMLInputElement;
    @domInject('#valor')
    private inputValue: HTMLInputElement;

    private negotiations = new Negociacoes();
    private negotiationsViews = new NegociacoesView('#negotiationsViews');
    private messageView = new MensagemView('#mensagemView');

    constructor(){
        this.negotiationsViews.update(this.negotiations);
    }

    @inspect()
    @loginTimeExecution()
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