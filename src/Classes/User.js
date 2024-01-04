let instance = null;

class Singleton {
    constructor() {
        if (!instance) {
            instance = this;
            this.name = null;
            this.id = null;
            this.email = null;
        }

        return instance;
    }

    setNameAndId(name, id) {
        this.name = name;
        this.id = id;
        return { name: this.name, id: this.id };
    }
}

export default new Singleton();