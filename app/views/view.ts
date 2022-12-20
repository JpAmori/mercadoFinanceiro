
export abstract class View <T>{

    protected element: HTMLElement;
    

    constructor(seletor: string){
        //const t1 = performance.now();
        this.element = document.querySelector(seletor);
        /*const t2 = performance.now()
        console.log(`Tempo de Execução: ${t2-t1 /(1000)}`)*/
    }

    /*@inspect()
    @loginTimedeExecucao(true)*/
    public update(model: T): void {
        let template = this.template(model);
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string; 

}
