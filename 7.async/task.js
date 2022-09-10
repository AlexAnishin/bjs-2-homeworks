"use strict";

class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    }
    addClock(time, callback, id) {
        if (id === undefined) {
            throw new Error('error text');
        }
        if (this.alarmCollection.find(alarm => alarm.id === id)) {
            console.error("дублирущийся id");
        } else(
            this.alarmCollection.push({
                time: time,
                callback: callback,
                id: id
            })
        )
    }
    removeClock(id) {
        if (this.alarmCollection.find(alarm => alarm.id === id)) {
            this.alarmCollection = this.alarmCollection.filter(
                (alarm) => alarm.id !== id
            )
            return true
        } else {
            return false
        }
    }
    getCurrentFormattedTime() {
        var d = new Date();
        return d.toLocaleTimeString().substr(0, 5);
    }
    checkClock() {
        this.alarmCollection.forEach((alarm) => {
            if (alarm.time === this.getCurrentFormattedTime()) {
                alarm.callback()
            }
        })
    }
    start() {
        this.checkClock()
        this.timerId = setInterval(() => {
            this.checkClock()
        }, 1000)
    }
    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null
        }
    }
    printAlarms() {
        this.alarmCollection.forEach((alarm) => {
            console.log(alarm.id, alarm.time)
        })
    }
    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    }

}
const testCase = () => {
    let alarmClock = new AlarmClock();
    console.log(alarmClock);
    let currentTime = new Date();
    alarmClock.addClock(
        currentTime.toLocaleTimeString().substr(0, 5),
        () => {
            setInterval(() => {
                console.log("вызывается несколько раз")
            }, 500)
        },
        1
    )
    alarmClock.addClock(
        `${currentTime.getHours()}:${parseInt(currentTime.getMinutes())+1}`,
        () => {
            console.log("+1")
        },
        2
    )
    alarmClock.addClock(
        `${currentTime.getHours()}:${parseInt(currentTime.getMinutes())+2}`,
        () => {
            console.log("+2")
        },
        3
    )
    alarmClock.printAlarms();
    alarmClock.start();
}