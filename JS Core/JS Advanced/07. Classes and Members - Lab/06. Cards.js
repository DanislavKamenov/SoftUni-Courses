let result = (function () {
    const VALID_CARDS = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    const Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    };

    class Card {
        constructor(face, suit) {
            this.face = face;
            this.suit = suit;
        }

        set face(f) {
            if (!VALID_CARDS.includes(f)) {
                throw new Error();
            }
            return this._face = f;
        }

        get face() {
            return this._face;
        }

        set suit(s) {
            if (!Object.keys(Suits).map(k => Suits[k]).includes(s)) {
                throw new Error();
            }
            return this._suit = s;
        }

        get suit() {
            return this._suit;
        }

        toString() {
            return this._face + this._suit;
        }
    }
    return {
        Suits: Suits,
        Card: Card
    }
}());

let Card = result.Card;
let Suits = result.Suits;

let c1 = new Card('2', Suits.SPADES);
console.log(c1.toString());
