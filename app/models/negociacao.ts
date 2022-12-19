import Comparable from "../interfaces/comparable.js";
import { Model } from "../interfaces/my-object.js";
import Printable from "../utils/printable.js";

export class Negociacao implements Model<Negociacao> {
// Declarando dentro do construtor
  constructor(
      private _data: Date,
      public readonly quantidade: number,
      public readonly valor: number) {}

  get data(): Date{
    const data = new Date(this._data.getTime());
    return data;
  }

  get volume(): number{
    return this.quantidade * this.valor
  }

  public forText(): string {
    return `Data: ${this.data}, 
            Quantidade: ${this.quantidade},
            Valor: ${this.valor}`
      ;
  }

  public equal(negociacao: Negociacao): boolean{
    return this.data.getDate() === negociacao.data.getDate() && this.data.getMonth() === negociacao.data.getMonth() && this.data.getFullYear() === negociacao.data.getFullYear();
  }

  public static criateDe(dateString: string, amountString: string, valueString: string): Negociacao{
    const exp = /-/g;
      const date = new Date(dateString.replace(exp, ','));
      const amount = parseInt(amountString);
      const value = parseFloat(valueString);
      return new Negociacao(date, amount, value)
  }
}

export default Negociacao;
