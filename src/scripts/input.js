export function initInputs() {

  const inputs = document.querySelectorAll( '.text-input__field' );
  const buttons = document.querySelectorAll( '.text-input__clear' );

  showClearButtons( inputs );
  handleInputsChange( inputs );
  handleClearButtonClick( buttons );

  function showClearButton( element ) {
    element.setAttribute( 'style', 'opacity : 1; visibility : visible' );
  }
  
  function hideClearButton( element ) {
    element.removeAttribute( 'style' );
  }

  function clearInputValue( element ) {
    element.value = '';
  }

  function removeErrorClass( element ) {
    element.classList.remove( 'text-input--error' );
  }

  function showClearButtons( elements ) {
    elements.forEach( input => {
      const clearButton = input.closest( '.text-input' ).querySelector( '.text-input__clear' );
      if ( input.value.length > 0 ) {
        showClearButton( clearButton );
      }
    } );
  }

  function handleInputsChange( elements ) {
    elements.forEach( input => {
      input.addEventListener( 'input', e => {
        const clearButton = input.closest( '.text-input' ).querySelector( '.text-input__clear' );
        if ( e.target.value.length ) {
          showClearButton( clearButton );
        } else {
          hideClearButton( clearButton );
        }
      } );
    } );
  }

  function handleClearButtonClick( elements ) {
    elements.forEach( button => {
      button.addEventListener( 'click', () => {
        const parent = button.closest( '.text-input' );
        const input = parent.querySelector( '.text-input__field' );
        clearInputValue( input );
        hideClearButton( button );
        removeErrorClass( parent );
      } );
    } );
  }

}