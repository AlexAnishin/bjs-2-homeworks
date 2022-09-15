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


function debounceDecoratorNew(func, ms) {
    let timerId;

    function wrapper(...args) {
        wrapper.allCount = wrapper.allCount + 1;
        if (timerId === undefined) {
            func.apply(this, args);
            wrapper.count = wrapper.count + 1;
            timerId = setTimeout(() => {
                clearTimeout(timerId);
                timerId = undefined;
                // console.timeEnd("time");
            }, ms)
        }
    }
    wrapper.count = 0;
    wrapper.allCount = 0;
    return wrapper;
}
const sendSignal = (signalOrder, delay) => console.log("Сигнал отправлен", signalOrder, delay);
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(() => upgradedSendSignal(1, 0));
setTimeout(() => upgradedSendSignal(2, 300), 300); // проигнорировано так как следующий сигнал отменит предыдущий (900 - 300 < 2000)
setTimeout(() => upgradedSendSignal(3, 900), 900); // проигнорировано так как следующий сигнал отменит предыдущий (1200 - 900 < 2000)
setTimeout(() => upgradedSendSignal(4, 1200), 1200); // проигнорировано так как следующий сигнал отменит предыдущий (2300 - 1200 < 2000)
setTimeout(() => upgradedSendSignal(5, 2300), 2300); // Сигнал отправлен так как следующий вызов не успеет отменить текущий: 4400-2300=2100 (2100 > 2000)
setTimeout(() => upgradedSendSignal(6, 4400), 4400);
setTimeout(() => upgradedSendSignal(7, 4500), 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с
setTimeout(() => {
    console.log(upgradedSendSignal.count); // было выполнено 3 отправки сигнала
    console.log(upgradedSendSignal.allCount); // было выполнено 6 вызовов декорированной функции
}, 7000)