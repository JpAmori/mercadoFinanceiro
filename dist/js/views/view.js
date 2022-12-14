export class View {
    constructor(seletor, scape) {
        this.scape = false;
        const t1 = performance.now();
        this.element = document.querySelector(seletor);
        if (scape) {
            this.scape = scape;
        }
        const t2 = performance.now();
        console.log(`Tempo de Execução: ${t2 - t1 / (1000)}`);
    }
    update(model) {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
