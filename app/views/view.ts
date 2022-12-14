export abstract class View <T>{

    protected element: HTMLElement;
    private scape = false;

    constructor(seletor: string, scape?: boolean){
        const t1 = performance.now();
        this.element = document.querySelector(seletor);
        if (scape) {
            this.scape = scape;
        }
        const t2 = performance.now()
        console.log(`Tempo de Execução: ${t2-t1 /(1000)}`)
    }

    public update(model: T): void {
        let template = this.template(model);
        if (this.scape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string; 

}
