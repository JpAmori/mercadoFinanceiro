export function loginTimeExecution (inSeconds: boolean = false){
    return function(
        target: any,
        propertyKey: string,
        descriptor: PropertyDescriptor
    ){
        const methodOrigin = descriptor.value;
        descriptor.value = function (...args: Array<any>) {
            let divisor = 1; 
            let unit = 'mileseconds'
            if (inSeconds) {
                divisor = 1000;
                unit = 'seconds'
            }
            const t1 = performance.now()
            const retorno = methodOrigin.apply(this, args);
            const t2 = performance.now()
            console.log(`${propertyKey}, tempo de execução: ${(t2-t1)/divisor} ${unit}`)

            retorno;
        }

        return descriptor;
    }
}