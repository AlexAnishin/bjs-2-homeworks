"use strict";

function parseCount(val) {
    const num = Number.parseInt(val);
    if (isNaN(num)) {
        throw new Error("Невалидное значение")
    }
    return num
}

function validateCount(val) {
    try {
        return parseCount(val)
    } catch (error) {
        return error;
    }

}

class Triangle {
    constructor(a, b, c) {
        if (
            a + b < c ||
            b + c < a ||
            a + c < b
        ) {
            throw new Error("Треугольник с такими сторонами не существует")
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }
    getPerimeter() {
        const perimeter = this.a + this.b + this.c;
        return perimeter;

    }
    getArea() {
        const p = 0.5 * this.getPerimeter()
        const sFloat = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))
        const sString = sFloat.toFixed(3);
        const s = Number.parseFloat(sString)
        return s;
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c)
    } catch {
        const error = "Ошибка! Треугольник не существует";
        const result = {
            getPerimeter: () => error,
            getArea: () => error
        }
        return result
    }
}