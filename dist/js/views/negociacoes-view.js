import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        return `
        <table class = "table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>COMPRA</th>
                </tr>
            </thead>
            <tbody>
                ${model.list().map(negociacao => {
            return `
                        <tr>
                            <td>${this.format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor}R$</td>
                            <td>${negociacao.volume}R$</td>
                        </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    format(data) {
        return new Intl.DateTimeFormat().format();
    }
}
export default NegociacoesView;
