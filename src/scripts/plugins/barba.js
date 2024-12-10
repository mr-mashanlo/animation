import barba from '@barba/core';

import { pageInAnimation, pageOutAnimation } from '../helpers/animations.js';

export function initBarba() {

  barba.init( {
    transitions: [ {
      name: 'home',
      leave( data ) { return pageOutAnimation( data ); },
      enter( data ) { return pageInAnimation( data ); }
    } ]
  } );

  barba.hooks.afterLeave( data => {
    data.next.container.setAttribute( 'style', 'position: absolute; top: 0; width: 100%' );
  } );

  barba.hooks.afterEnter( data => {
    data.next.container.removeAttribute( 'style' );
  } );

}