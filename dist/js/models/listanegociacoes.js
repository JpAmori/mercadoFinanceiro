export class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    // Adicionando a negociação ao grupo de negociações
    Add(negociacao) {
        this.negociacoes.push(negociacao);
    }
    // Armazenando a lista ** ReadonlyArray = Declarando que não podera realizar nenhuma alteração na lista
    list() {
        return this.negociacoes;
    }
}
//  Metodos Para adicionar Negociações
/*const negociacoes = new Negociacoes();
negociacoes.lista().array.forEach(n => {
    n.
});*/
/*const negociacoes = new Negociacoes();
negociacoes.methodAdd(negociacoes)*/ 
