export default class Subscriber {
    #fn;

    /**
     * Constructor
     * @param {funciton} fn (publish에  변화가 생길때 하는 함수)
     */
    constructor(fn) {
        this.#fn = fn;
    }

    subscribe(publisher) {
        publisher.register(this.#fn);
    }
}
