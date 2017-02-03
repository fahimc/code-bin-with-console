const EventDispatcher = {
    eventCollection: {},
    addListener(eventName, callback) {
        if (!this.eventCollection[eventName]) this.eventCollection[eventName] = [];
        this.eventCollection[eventName].push(callback);
    },
    removeListener(eventName, callback) {
        if (!this.eventCollection[eventName]) return;
        for (let a = 0; a < this.eventCollection[eventName].length; ++a) {
            let item = this.eventCollection[eventName][a];
            if (item === callback) {
                this.eventCollection[eventName].splice(a, 1);
                return;
            }
        }
    },
    dispatch(eventName,options) {
        if (!this.eventCollection[eventName]) return;
        for (let a = 0; a < this.eventCollection[eventName].length; ++a) {
            this.eventCollection[eventName][a](options);
        }
    }
}

export default EventDispatcher;
