"use strict";

function compareArrays(arr1, arr2) {
    let result;
    result = arr1.length === arr2.length && arr1.every((el, i) => el === arr2[i])
    return result; // boolean
}

function advancedFilter(arr) {
    let resultArr;
    resultArr = arr.filter((el) => {
        return el % 3 === 0;
    }).filter((el) => {
        return el > 0;
    }).map((el) => {
        return el * 10;
    })
    return resultArr; // array
}