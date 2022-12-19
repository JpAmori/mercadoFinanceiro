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
    equal(object) {
        return JSON.stringify(this.negociacoes) === JSON.stringify(object.list());
    }
}
//# sourceMappingURL=listanegociacoes.js.map