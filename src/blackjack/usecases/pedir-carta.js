/**
 * This able to get a card
 * @param {Array<string>} deck Put a deck as parameter
 * @returns {String} Returns a card from deck and delete it card
 */


// Esta función me permite tomar una carta
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}