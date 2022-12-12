import Negociacao from "./negociacao.js";

export class Negociacoes {
    private negociacoes: Array<Negociacao> = [];

    Add (negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    list (): Array<Negociacao> {
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