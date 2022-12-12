import Negociacao from "./models/negociacao.js";
const negociacao = new Negociacao(new Date(), 10, 150);
//console.log(negociacao.volume);
import NegociacaoController from "./controllers/controller.js";
const controller = new NegociacaoController();
const form = document.querySelector('.form');
form.addEventListener("submit", event => {
    event.preventDefault();
    controller.methodAdd();
});
