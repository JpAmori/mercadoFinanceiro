export class Negociacao {
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

  public static criateDe(dateString: string, amountString: string, valueString: string): Negociacao{
    const exp = /-/g;
      const date = new Date(dateString.replace(exp, ','));
      const amount = parseInt(amountString);
      const value = parseFloat(valueString);
      return new Negociacao(date, amount, value)
  }
}

export default Negociacao;
