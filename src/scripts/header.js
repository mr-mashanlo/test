function createWidthListener( onLessThan1024, onGreaterThan1024 ) {
  let isLessThan1024 = window.innerWidth < 1024;
  const handleResize = () => {
    const currentWidthLessThan1024 = window.innerWidth < 1024;
    if ( currentWidthLessThan1024 !== isLessThan1024 ) {
      isLessThan1024 = currentWidthLessThan1024;
      if ( isLessThan1024 ) {
        onLessThan1024();
      } else {
        onGreaterThan1024();
      }
    }
  };

  window.addEventListener( 'resize', handleResize );

  if ( isLessThan1024 ) {
    onLessThan1024();
  } else {
    onGreaterThan1024();
  }

  return () => window.removeEventListener( 'resize', handleResize );
}

export function initHeader() {

  const header = document.querySelector( '.header' );

  createWidthListener(
    () => {
      createPhoneModal();
      createMenuSlider();
      handleMenuButtonClick();
      handleCallButtonClick();
      handleMegamenuButtonClick();
      handleCloseButtonClick();
    },
    () => {
      handleServiceButtonClick();
    }
  );

  function createMenuSlider() {
    const primary = header.querySelector( '.primary-header__menu' );
    const secondary = header.querySelector( '.secondary-header__menu' );
    header.insertAdjacentHTML( 'afterbegin', '<div class="header-modal header-mobile"><button class="header-modal__close"><span class="icon-close"></span></button></div>' );
    header.firstChild.appendChild( primary );
    header.firstChild.appendChild( secondary );
    primary.setAttribute( 'style', 'display: flex' );
    secondary.setAttribute( 'style', 'display: flex' );
  }

  function createPhoneModal() {
    const menu = header.querySelector( '.secondary-header__call' );
    header.insertAdjacentHTML( 'afterbegin', '<div class="header-modal header-phone"><button class="header-modal__close"><span class="icon-close"></span></button></div>' );
    header.firstChild.appendChild( menu );
    menu.setAttribute( 'style', 'display: flex' );
  }

  function handleMenuButtonClick() {
    const button = header.querySelector( '.nav-button' );
    const menu = header.querySelector( '.header-mobile' );
    button.addEventListener( 'click', () => {
      menu.classList.toggle( 'header-modal--active' );
    } );
  }

  function handleServiceButtonClick() {
    const button = header.querySelector( '.menu-button' );
    const menu = header.querySelector( '.megamenu' );
    button.addEventListener( 'click', () => {
      menu.classList.toggle( 'megamenu--active' );
    } );
  }

  function handleCallButtonClick() {
    const button = header.querySelector( '.call-button' );
    const menu = header.querySelector( '.header-phone' );
    button.addEventListener( 'click', () => {
      menu.classList.toggle( 'header-modal--active' );
    } );
  }

  function handleMegamenuButtonClick() {
    const button = header.querySelector( '.megamenu-button' );
    const menu = header.querySelector( '.megamenu' );
    button.addEventListener( 'click', () => {
      menu.classList.toggle( 'megamenu--active' );
    } );
  }

  function handleCloseButtonClick() {
    document.body.addEventListener( 'click', e => {
      if ( e.target.classList.contains( 'header-modal__close' ) ) {
        e.target.closest( '.header-modal' ).classList.toggle( 'header-modal--active' );
      }
      if ( e.target.classList.contains( 'megamenu__close' ) ) {
        e.target.closest( '.megamenu' ).classList.toggle( 'megamenu--active' );
      }
    } );
  }

}