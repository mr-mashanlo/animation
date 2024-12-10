export function initButtons() {

  const buttons = document.querySelectorAll( '.circle-button' );

  if ( !buttons ) { return; }

  buttons.forEach( button => {

    const section = button.closest( '.section' );

    const smoothness = 0.1;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    section.addEventListener( 'mouseenter', () => {
      button.style.opacity = 1;
      button.style.visibility = 'visible';
    } );

    section.addEventListener( 'mouseleave', () => {
      button.style.opacity = 0;
      button.style.visibility = 'hidden';
    } );

    section.addEventListener( 'mousemove', e => {
      targetX = e.pageX - 50;
      targetY = e.pageY - 50;
    } );

    function animate() {
      currentX += ( targetX - currentX ) * smoothness;
      currentY += ( targetY - currentY ) * smoothness;
      button.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      requestAnimationFrame( animate );
    }

    animate();

  } );

}