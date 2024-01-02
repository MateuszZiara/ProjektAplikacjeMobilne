let instance = null;

class Search {
    constructor() {
        if (!instance) {
            instance = this;
            this.phrase = null;
        }

        return instance;
    }

    setPhrase(phrase) {
        this.phrase = phrase;
    }
}

export default new Search();