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
}
