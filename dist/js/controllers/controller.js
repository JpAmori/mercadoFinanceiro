var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInject } from "../decorators/inject.js";
import { DiadaSemana } from "../enums/dias-da-semana.js";
import { Negociacoes } from "../models/listanegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { MensagemView } from "../views/mensagem-view.js";
import { NegociacoesView } from "../views/negociacoes-view.js";
import { NegotiationsService } from "../services/negociacoes-service.js";
import PrintOut from "../utils/printOut.js";
export class NegociacaoController {
    constructor() {
        this.negotiations = new Negociacoes();
        this.negotiationsViews = new NegociacoesView('#negotiationsViews');
        this.messageView = new MensagemView('#mensagemView');
        this.negotiationServices = new NegotiationsService();
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
            PrintOut(negotiation, this.negotiations);
            this.updateView();
            this.cleanNegotiation();
        }
    }
    importDados() {
        this.negotiationServices.getNegotiations().then(negotiationsHoje => {
            return negotiationsHoje.filter(negotiationsHoje => {
                return !this.negotiations.list().some(negotiations => negotiations.equal(negotiationsHoje));
            });
        }).then(negotiationsHoje => {
            for (let negotiation of negotiationsHoje)
                this.negotiations.Add(negotiation);
        });
        this.negotiationsViews.update(this.negotiations);
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
__decorate([
    domInject('#data')
], NegociacaoController.prototype, "inputDate", void 0);
__decorate([
    domInject('#quantidade')
], NegociacaoController.prototype, "inputAmount", void 0);
__decorate([
    domInject('#valor')
], NegociacaoController.prototype, "inputValue", void 0);
export default NegociacaoController;
//# sourceMappingURL=controller.js.map