let instance = null;

class Pumpernikiel {
    constructor() {
        if (!instance) {
            instance = this;
            this.licznik = 0
            this.boolX = true;
            this.boolY = false;
        }

        return instance;
    }


}

export default new Pumpernikiel();