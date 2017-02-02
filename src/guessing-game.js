class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.lastGuess = this.lastGuess ? this.lastGuess : Math.ceil(this.min + (this.max - this.min) / 2);
        return this.lastGuess;
    }

    lower() {
        this.lastGuess = Math.ceil(this.min + (this.lastGuess - this.min) / 2);
        this.guess();
    }

    greater() {
        this.lastGuess = Math.ceil(this.max - (this.max - this.lastGuess) / 2);
        this.guess();
    }
}

module.exports = GuessingGame;
