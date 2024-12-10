import anime from 'animejs/lib/anime.es.js';

export function titleAnimation( title ) {
  return anime( {
    targets: title.querySelectorAll( 'span' ),
    translateY: [ '100%', '0%' ],
    rotateX: [ '-80deg', '0deg' ],
    opacity: [ 0, 1 ],
    easing: 'easeInOutQuad',
    duration: 1000
  } );
}

export function pageOutAnimation( data ) {
  return anime
    .timeline()
    .add( {
      targets: data.current.container.closest( 'body' ).querySelectorAll( '.curtain--front path' ),
      d: [
        'M0 0H1010V1C1010 1 929.107 1 830.5 1C731.893 1 693.607 1.19526 595 1C496.392 0.804738 347.108 1 248.5 1C149.892 1 0 1 0 1V0Z',
        'M0 0H1010V550C1010 550 863.607 650 765 650C666.393 650 524.607 540.487 426 540C327.392 539.513 293.608 600 195 600C96.3918 600 0 515 0 515V0Z'
      ],
      duration: 1000,
      delay: 200,
      easing: 'easeInOutQuad'
    }, 0 )
    .add( {
      targets: data.current.container.closest( 'body' ).querySelectorAll( '.curtain--back path' ),
      d: [
        'M0 0H1010V1C1010 1 929.107 1 830.5 1C731.893 1 693.607 1.19526 595 1C496.392 0.804738 347.108 1 248.5 1C149.892 1 0 1 0 1V0Z',
        'M0 0H1010V550C1010 550 954.607 650 760 650C565 650 481.607 560.545 383 560C284.392 559.455 279.608 600 181 600C82.3918 600 0 540 0 540V0Z'
      ],
      duration: 1000,
      easing: 'easeInOutQuad'
    }, 0 )
    .add( {
      targets: data.current.container,
      opacity: [ 1, 0 ],
      duration: 1000,
      easing: 'easeInOutQuad'
    }, 0 ).finished;
}

export function pageInAnimation( data ) {
  return anime
    .timeline()
    .add( {
      targets: data.next.container.closest( 'body' ).querySelectorAll( '.curtain--front path' ),
      d: [
        'M0 0H1010V550C1010 550 863.607 650 765 650C666.393 650 524.607 540.487 426 540C327.392 539.513 293.608 600 195 600C96.3918 600 0 515 0 515V0Z',
        'M0 0H1010V1C1010 1 929.107 1 830.5 1C731.893 1 693.607 1.19526 595 1C496.392 0.804738 347.108 1 248.5 1C149.892 1 0 1 0 1V0Z'
      ],
      duration: 1000,
      easing: 'easeInOutQuad'
    }, 0 )
    .add( {
      targets: data.next.container.closest( 'body' ).querySelectorAll( '.curtain--back path' ),
      d: [
        'M0 0H1010V550C1010 550 954.607 650 760 650C565 650 481.607 560.545 383 560C284.392 559.455 279.608 600 181 600C82.3918 600 0 540 0 540V0Z',
        'M0 0H1010V1C1010 1 929.107 1 830.5 1C731.893 1 693.607 1.19526 595 1C496.392 0.804738 347.108 1 248.5 1C149.892 1 0 1 0 1V0Z'
      ],
      duration: 1000,
      delay: 200,
      easing: 'easeInOutQuad'
    }, 0 )
    .add( {
      targets: data.next.container,
      opacity: [ 0, 1 ],
      duration: 1000,
      easing: 'easeInOutQuad'
    }, 0 ).finished;
}