export class View {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map