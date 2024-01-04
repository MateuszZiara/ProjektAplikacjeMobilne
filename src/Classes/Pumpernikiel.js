let instance = null;

class Pumpernikiel {
    constructor() {
        if (!instance) {
            instance = this;
            this.licznik = 0
        }

        return instance;
    }


}

export default new Pumpernikiel();