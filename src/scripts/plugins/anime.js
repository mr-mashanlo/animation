import { titleAnimation } from '../helpers/animations.js';
import { intersection } from '../helpers/intersection.js';

export function initAnime() {

  const titles = document.querySelectorAll( '.title--animated' );
  intersection( { elements: titles, callback: entry => titleAnimation( entry.target ) } );

}