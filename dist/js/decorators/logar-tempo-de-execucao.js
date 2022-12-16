export function loginTimedeExecucao() {
    return function (target, propertyKey, descriptor) {
        const methodOrigin = descriptor.value;
        descriptor.value = function (...args) {
            const t1 = performance.now();
            const retorno = methodOrigin.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / 1000}`);
            retorno;
        };
        return descriptor;
    };
}
