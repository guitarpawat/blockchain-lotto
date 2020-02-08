class Config {
    #nextLive;

    get nextLive() {
        return this.#nextLive;
    }

    set nextLive(value) {
        this.#nextLive = value;
    }
}

module.exports.instance = new Config();
