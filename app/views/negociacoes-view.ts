import { escape } from "../decorators/escape.js";
import { Negociacoes } from "../models/listanegociacoes.js";
import { Negociacao } from "../models/negociacao.js";
import { View } from "./view.js";

export class NegociacoesView extends View <Negociacoes>{
    
    @escape
    template(model: Negociacoes): string{
        let soma: number = 0;
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
                ${model.list().map(negociacao =>{
                    return `
                        <tr>
                            <td>${new Intl.DateTimeFormat().format(negociacao.data)}</td>
                            <td>${negociacao.quantidade}</td>
                            <td>${negociacao.valor.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}R$</td>
                            <td>${negociacao.volume.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}R$</td>
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

