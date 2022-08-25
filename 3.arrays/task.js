"use strict";

function compareArrays(arr1, arr2) {
    let result;
    result = true;
    if (arr1.length !== arr2.length) {
        result = false;
    } else {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                result = false;
            }
        }
    }
    return result; // boolean
}

function advancedFilter(arr) {
    let resultArr;
    resultArr = arr.filter(function(el) {
        return el % 3 === 0
    }).filter(function(el) {
        return el > 0;
    }).map(function(el) {
        return el * 10;
    })

    // let result = arr.filter(...).filter(...).map(...)

    return resultArr; // array
}