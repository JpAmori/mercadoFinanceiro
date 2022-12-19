import { Model } from "../interfaces/my-object.js";
import Negociacao from "./negociacao.js";

export class Negociacoes implements Model<Negociacoes> {
    
    private negociacoes: Negociacao[] = [];
    // Adicionando a negociação ao grupo de negociações
    Add (negociacao: Negociacao){
        this.negociacoes.push(negociacao);
    }
    // Armazenando a lista ** ReadonlyArray = Declarando que não podera realizar nenhuma alteração na lista
    list (): readonly Negociacao[] {
        return this.negociacoes;
    }

    public forText(): string {
        return JSON.stringify(this.negociacoes, null, 2)
    }

    public equal(object: Negociacoes): boolean {
        return JSON.stringify(this.negociacoes) === JSON.stringify(object.list());
    }
}

