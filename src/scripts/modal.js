export function initModals() {

  document.body.addEventListener( 'click', e => {

    if ( e.target.classList.contains( 'modal-link' ) ) {
      e.preventDefault();
      const modal = document.querySelector( `[data-modal='${e.target.dataset.href}']` );
      modal.setAttribute( 'style', 'opacity : 1; visibility : visible' );
    }

    if ( e.target.classList.contains( 'modal' ) ) {
      e.preventDefault();
      e.target.removeAttribute( 'style' );
    }

    if ( e.target.classList.contains( 'modal__close' ) ) {
      e.preventDefault();
      e.target.closest( '.modal' ).removeAttribute( 'style' );
    }

  } );

}