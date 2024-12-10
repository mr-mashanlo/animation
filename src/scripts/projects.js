export function initProjects() {

  const image = document.querySelector( '.project__image' );
  const list = document.querySelector( '.project-list' );

  if ( !image ) { return; }

  const smoothness = 0.1;
  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;

  list.addEventListener( 'mouseenter', () => {
    image.style.opacity = 1;
    image.style.visibility = 'visible';
  } );

  list.addEventListener( 'mouseleave', () => {
    image.style.opacity = 0;
    image.style.visibility = 'hidden';
  } );

  list.addEventListener( 'mousemove', e => {
    image.setAttribute( 'src', e.target.dataset.src );
    targetX = e.pageX + 100;
    targetY = e.pageY - 100;
  } );

  function animate() {
    currentX += ( targetX - currentX ) * smoothness;
    currentY += ( targetY - currentY ) * smoothness;
    image.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
    requestAnimationFrame( animate );
  }

  animate();

}