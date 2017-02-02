class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    getMiddle() {
        return (this.max - this.min) / 2;
    }

    guess() {
        this._guess = this._guess ? this._guess : (this.min + this.getMiddle());

        return Math.ceil(this._guess);
    }

    lower() {
        this.max = this._guess;
        this._guess = this.max - this.getMiddle();

        this.guess();
    }

    greater() {
        this.min = this._guess;
        this._guess = this.min + this.getMiddle();

        this.guess();
    }
}

module.exports = GuessingGame;
