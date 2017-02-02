class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this._guess = this._guess ? this._guess : (this.min + ((this.max - this.min) / 2));
        return Math.ceil(this._guess);
    }

    lower() {
        this.lastGuess = this._guess;
        this._guess = this.lastGuess + (this.lastGuess / 2);
        this.guess();
    }

    greater() {
        this.lastGuess = this._guess;
        this._guess = this.lastGuess - (this.lastGuess / 2);
        this.guess();
    }
}

module.exports = GuessingGame;
