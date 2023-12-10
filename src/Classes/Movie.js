let instance = null;

class Movie {
    constructor() {
        if (!instance) {
            instance = this;
            this.array = [
                {id: 0, name: 'Batman początki', start: '18:30', end: '21:30'},
                {id: 1, name: 'Toy story', start: '19:00', end: '20:30'},
                {id: 2, name: 'Auta', start: '19:15', end: '20:15'}
            ];
        }

        return instance;
    }


}

export default new Movie();