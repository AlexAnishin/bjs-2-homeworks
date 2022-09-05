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
}