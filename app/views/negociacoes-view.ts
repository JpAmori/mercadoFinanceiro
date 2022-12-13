import { Negociacoes } from "../models/listanegociacoes.js";
import { View } from "./view.js";

export class NegociacoesView extends View <Negociacoes>{

    template(model: Negociacoes): string{
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
                ${model.list().map(negociacao =>{
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
    
    private format(data: Date): string{
        return new Intl.DateTimeFormat().format();
    }

}



export default NegociacoesView;