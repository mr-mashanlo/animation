export function intersection( { elements, callback, unobserve = true, options = {} } ) {

  const observer = new IntersectionObserver(
    ( entries, observer ) => {
      entries.forEach( entry => {
        if ( entry.isIntersecting ) {
          callback( entry );
        }
        if ( entry.isIntersecting && unobserve ) {
          observer.unobserve( entry.target );
        }
      } );
    },
    options
  );

  elements.forEach( ( element ) => observer.observe( element ) );

}