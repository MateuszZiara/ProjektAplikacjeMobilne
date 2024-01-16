let instance = null;

class Goods {
    constructor() {
        if (!instance) {
            instance = this;
            this.id = null;
            this.img = null;
            this.size = null;
            this.price = null;
        }

        return instance;
    }


}

export default new Goods();