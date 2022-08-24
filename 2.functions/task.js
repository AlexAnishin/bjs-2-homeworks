"use strict";

function getArrayParams(arr) {
    let min, max, sum, avg;
    min = Infinity;
    max = -Infinity;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (min > arr[i]) {
            min = arr[i];
        }
        if (max < arr[i]) {
            max = arr[i];
        }
        sum = sum + arr[i];
    }
    let floatAvg = sum / arr.length;
    let stringAvg = floatAvg.toFixed(2);
    avg = Number.parseFloat(stringAvg);
    return { min: min, max: max, avg: avg };
}


function worker(arr) {
    let sum;
    sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

function makeWork(arrOfArr, func) {
    let max;
    max = -Infinity;
    for (let i = 0; i < arrOfArr.length; i++) {
        let sum = func(arrOfArr[i]);
        if (max < sum) {
            max = sum;
        }
    }
    return max;
}

// Задание 3
function worker2(arr) {
    // Ваш код
}