export class Negociacao {
    constructor(_data, quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
    get volume() {
        return this.quantidade * this.valor;
    }
    static criateDe(dateString, amountString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ','));
        const amount = parseInt(amountString);
        const value = parseFloat(valueString);
        return new Negociacao(date, amount, value);
    }
}
export default Negociacao;
