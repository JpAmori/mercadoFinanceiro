export function inspect(){

    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor){
        const methodOrigin = descriptor.value;
        descriptor.value = function(...args: any[]){
            console.log(`---Metodo: ${propertyKey}`);
            console.log(`-------Parametros: ${JSON.stringify(args)}`);
            const retorno = methodOrigin.apply(this, args);
            console.log(`-----Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        }


        return descriptor;
    }
}