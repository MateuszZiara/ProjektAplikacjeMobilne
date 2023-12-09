let instance = null;

class Ticket {
    constructor() {
        if (!instance) {
            instance = this;
            this.id = null;
        }

        return instance;
    }

    setId(id) {
        this.id = id;
    }
}

export default new Ticket();