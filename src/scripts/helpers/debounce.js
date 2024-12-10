export function debounce( callback, ms ) {
  let id = null;
  return ( event ) => {
    clearInterval( id );
    id = setTimeout( () => callback( event ), ms );
  };
}