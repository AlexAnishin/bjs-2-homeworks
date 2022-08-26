"use strict";

function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
    this.subject = subjectName;

}

Student.prototype.addMark = function(mark) {
    if (this.marks === undefined) {
        this.marks = [mark];
    } else {
        this.marks.push(mark);
    }
}

Student.prototype.addMarks = function() {
    if (this.marks === undefined) {
        this.marks = [];
    }
    for (let i = 0; i < arguments.length; i++) {
        this.marks.push(arguments[i]);
    }
}
Student.prototype.getAverage = function() {
    if (this.marks === undefined || this.marks.length === 0) {
        return 0;
    } else {
        return this.marks.reduce((acc, el) => acc + el, 0) / this.marks.length;
    }
}
Student.prototype.exclude = function(reason) {
    this.excluded = reason;
    delete this.marks;
    delete this.subject;
}