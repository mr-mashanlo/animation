import Lenis from 'lenis';

export function initLenisPlugin() {
  const lenis = new Lenis( {
    autoRaf: true,
    smoothWheel: true,
    lerp: 0.05
  } );

  lenis.on( 'scroll', ( e ) => {
    console.log( e );
  } );
}