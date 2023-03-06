import _ from 'underscore';

/**
 * 
 * @param   {array<string>} tiposDeCarta    Ejemplo: [ 'C' , 'D' , 'H' , 'S' ]
 * @param   {array<string>} tiposEspeciales Ejemplo: [ 'A' , 'J' , 'Q' , 'K' ]
 * @returns {array<string>} Returns a new card deck
 * 
 */

//Esta función crea un Deck
export const crearDeck = ( tiposDeCarta, tiposEspeciales ) => {

    if(!tiposDeCarta || tiposDeCarta === 0) throw new Error('Tipos de carta son obligatorios como un arreglo string'); 

    if(!tiposEspeciales || tiposEspeciales === 0) throw new Error('Tipos especiales son obligatorios como un arreglo string'); 

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );

    return deck;
}