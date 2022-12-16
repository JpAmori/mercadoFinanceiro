export function domInject(seletor: string){
    return function(target: any, propertyKey: string){
        
        const getter = function (){
            const element = document.querySelector(seletor);
            return element;
        }

        Object.defineProperty(target, propertyKey, {get: getter})
    }
}