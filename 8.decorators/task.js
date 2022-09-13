function cachingDecoratorNew(func) {
    const cache = {}
    let indecies = [];
    return (...args) => {
        const hash = args.join(',');
        if (cache.length >= 5) {
            const kee = indecies.shift();
            delete(cache[kee])
        }
        let result = cache[hash];
        if (result === undefined) {
            result = cache[hash] = func(...args);
            indecies.push(hash);
            output = "Вычисляем: " + result;
        } else {
            output = "Из кэша: " + result;
        }
        console.log(output);
        return output;
    }
}


function debounceDecoratorNew(func) {
    // Ваш код
}