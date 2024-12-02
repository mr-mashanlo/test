export class Select {

  constructor() {
    this.isActive = false;
    this.selects = document.querySelectorAll( '.custom-select' );
    this.init();
  }

  init() {
    if ( this.selects.length ) {
      this.addHTML();
      this.handleDesktopButtonClick();
      this.handleOutsideClick();
      this.handleOptionButtonClick();
      this.handleSelectChange();
    }
  }

  addHTML() {
    this.selects.forEach( select => {
      const options = select.querySelectorAll( 'option' );

      select.classList.add( 'select__button', 'select__mobile' );
      select.insertAdjacentHTML( 'beforebegin', '<div class="select"><span class="icon-chevron-down select__icon"></span></div>' );
      select.previousElementSibling.appendChild( select );

      const li = [ ...options ].reduce( ( acc, item ) => {
        acc = acc + `<li class="select-list__item"><button class="select-list__button" data-value="${item.value}">${item.innerText} <span class="icon-check select-list__icon"></span></button></li>`;
        return acc;
      }, '' );

      const html = `<button class="select__button select__desktop">${options[0].innerText}</button><ul class="select-list">${li}</ul>`;
      select.insertAdjacentHTML( 'afterend', html );
    } );
  }

  handleDesktopButtonClick() {
    document.body.addEventListener( 'click', e => {
      if ( e.target.classList.contains( 'select__desktop' ) ) {
        const icon = e.target.closest( '.select' ).querySelector( '.select__icon' );
        const list = e.target.closest( '.select' ).querySelector( '.select-list' );
        icon.setAttribute( 'style', 'transform: rotate(180deg)' );
        list.setAttribute( 'style', 'opacity: 1; visibility: visible' );
        this.isActive = true;
      }
    } );
  }

  handleOutsideClick() {
    document.body.addEventListener( 'click', e => {
      if ( this.isActive && !e.target.closest( '.select' ) ) {
        const icon = document.querySelectorAll( '.select__icon' );
        const list = document.querySelectorAll( '.select-list' );
        icon.forEach( icon => { icon.removeAttribute( 'style' ); } );
        list.forEach( option => { option.removeAttribute( 'style' ); } );
        this.isActive = false;
      }
    } );
  }

  handleOptionButtonClick() {
    document.body.addEventListener( 'click', e => {
      if ( e.target.classList.contains( 'select-list__button' ) ) {
        const icon = e.target.closest( '.select' ).querySelector( '.select__icon' );
        const select = e.target.closest( '.select' ).querySelector( '.select__mobile' );
        const button = e.target.closest( '.select' ).querySelector( '.select__desktop' );
        const list = e.target.closest( '.select' ).querySelector( '.select-list' );
        const options = list.querySelectorAll( 'button' );
        select.value = e.target.dataset.value;
        button.innerText = e.target.innerText;
        list.removeAttribute( 'style' );
        options.forEach( option => option.classList.remove( 'select-list__button--active' ) );
        e.target.classList.add( 'select-list__button--active' );
        icon.removeAttribute( 'style' );
      }
    } );
  }

  handleSelectChange() {
    document.body.addEventListener( 'change', e => {
      if ( e.target.classList.contains( 'select__mobile' ) ) {
        const button = e.target.closest( '.select' ).querySelector( '.select__desktop' );
        button.innerHTML = [ ...e.target.children ].find( option => option.value === e.target.value ).innerText;
      }
    } );
  }

}