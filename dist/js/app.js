import Negociacao from "./models/negociacao.js";
const negociacao = new Negociacao(new Date(), 10, 150);
import NegociacaoController from "./controllers/controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener("submit", event => {
    event.preventDefault();
    controller.methodAdd();
});
const importButon = document.querySelector('#import');
if (importButon) {
    importButon.addEventListener('click', () => {
        controller.importDados();
    });
}
else {
    throw console.error('Botão não encontrado');
}
