export default class Mediator {
    constructor(events = {}) {
        this.events = events;
    }

    subscribe(key, callback) {
        if (!this.events.hasOwnProperty(key)) {
            this.events[key] = [];
        }

        this.events[key].push(callback);
    }

    publish(key, params = {}) {
        if (!this.events.hasOwnProperty(key)) return [];

        this.events[key].forEach(callback => {
            callback(params);
        });
    }
}
