import Negociacao from "../models/negociacao.js";
import Printable from "./printable.js";

export function PrintOut(...objects: Printable[]): void{
    for(let object of objects){
        console.log(object.forText());
    }
}

export default PrintOut;