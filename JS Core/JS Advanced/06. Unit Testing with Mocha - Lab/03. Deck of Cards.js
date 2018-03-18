function printDeckOfCards(cards) {
    function createCard(card, suit) {
        const VALID_CARDS = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const VALID_SUITS = {'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663'};
        if (VALID_CARDS.indexOf(card) < 0 || !VALID_SUITS.hasOwnProperty(suit)) {
            throw new Error('Invalid card');
        }
        return {
            card,
            suit,
            toString: function () {
                return card + VALID_SUITS[suit];
            }
        }
    }
    let output = [];
    for (let card of cards) {
        let face = card.substr(0, card.length - 1);
        let suit = card[card.length - 1];
        try {
            output.push(createCard(face, suit).toString());
        } catch (e) {
            console.log('Invalid card: ' + card);
        }
    }
    console.log(output.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);