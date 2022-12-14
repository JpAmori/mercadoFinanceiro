import { View } from "./view.js";
export class NegociacoesView extends View {
    template(model) {
        let soma = 0;
        return `
        <table class = "table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR UNITARIO</th>
                    <th>COMPRA</th>
                </tr>
            </thead>
            <tbody>
                ${model.list().map(negociacao => {
            return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}R$</td>
                            <td>${negociacao.volume.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}R$</td>
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
