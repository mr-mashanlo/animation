import LocomotiveScroll from 'locomotive-scroll';

export function initLocomotive() {

  return new LocomotiveScroll( {
    el: document.querySelector( '[data-scroll-container]' ),
    smooth: true,
    tablet: { smooth: true, breakpoint: 500 }
  } );

}