export function loginTimeExecution(inSeconds = false) {
    return function (target, propertyKey, descriptor) {
        const methodOrigin = descriptor.value;
        descriptor.value = function (...args) {
            let divisor = 1;
            let unit = 'mileseconds';
            if (inSeconds) {
                divisor = 1000;
                unit = 'seconds';
            }
            const t1 = performance.now();
            const retorno = methodOrigin.apply(this, args);
            const t2 = performance.now();
            retorno;
        };
        return descriptor;
    };
}
