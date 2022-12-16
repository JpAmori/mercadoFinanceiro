export function domInject(seletor) {
    return function (target, propertyKey) {
        const getter = function () {
            const element = document.querySelector(seletor);
            return element;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
