export function inspect() {
    return function (target, propertyKey, descriptor) {
        const methodOrigin = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`---Metodo: ${propertyKey}`);
            console.log(`-------Parametros: ${JSON.stringify(args)}`);
            const retorno = methodOrigin.apply(this, args);
            console.log(`-----Retorno: ${JSON.stringify(retorno)}`);
            return retorno;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map