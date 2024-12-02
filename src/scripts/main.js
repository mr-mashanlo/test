import { initHeader } from './header.js';
import { initInputs } from './input.js';
import { initModals } from './modal.js';
import { Select } from './select.js';

window.addEventListener( 'load', () => {
  initInputs();
  initModals();
  new Select();
  initHeader();
} );