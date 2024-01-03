let instance = null;

class TicketToBuy {
    constructor() {
        if (!instance) {
            instance = this;
            this.id = null;
            this.name = '';
            this.time = '';
            this.number = null;
            this.date = '';
        }

        return instance;
    }

    setId(id) {
        this.id = id;
    }
}

export default new TicketToBuy();