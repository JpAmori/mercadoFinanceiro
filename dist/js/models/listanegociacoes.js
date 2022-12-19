export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    Add(negociacao) {
        this.negociacoes.push(negociacao);
    }
    list() {
        return this.negociacoes;
    }
    forText() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
