let instance = null;

class Cart {
    constructor() {
        if (!instance) {
            instance = this;
            this.array = [

            ];
        }

        return instance;
    }


}

export default new Cart();