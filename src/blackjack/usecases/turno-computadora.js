import { pedirCarta, valorCarta, crearCartaHtml } from './';

/**
 * 
 * @param {Number} puntosMinimos Minimum point that IA needs to win 
 * @param {HTMLElement} puntosHTML HTML Element showing at browser
 * @param {HTMLElement} divCartasComputadora Show points at browser
 * @param {Array<String>} deck Cards array
 */


export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    let puntosComputadora = 0;

    if (!puntosMinimos) throw new Error('Se necesitan los puntos minimos');
    if(!divCartasComputadora) throw new Error ('Se necesitan el divCartas para ser mostradas en el explorador');
    if (!puntosHTML) throw new Error('Se necesitan los puntos HTML');

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
       //TODO: Crear carta

       const imgCarta = crearCartaHtml(carta);

       divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}

