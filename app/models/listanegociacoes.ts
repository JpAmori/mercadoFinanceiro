import Negociacao from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Negociacao[] = [];
    // Adicionando a negociação ao grupo de negociações
    Add (negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    // Armazenando a lista ** ReadonlyArray = Declarando que não podera realizar nenhuma alteração na lista
    list (): readonly Negociacao[] {
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