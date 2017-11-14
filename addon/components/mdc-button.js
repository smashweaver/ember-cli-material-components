import Component from '@ember/component';
import layout from '../templates/components/mdc-button';
import { get, set } from '@ember/object';
import { MDCRipple } from './-material/ripple';

export default Component.extend({
  layout,

  tagName: 'button',

  classNames: 'mdc-button',

  attributeBindings: [
    'disabled'
  ],

  classNameBindings: [
    'isRaised:mdc-button--raised',
    'isCenter:mdc-button--center',
    'isRipple:mdc-ripple-surface'
  ],

  isCenter: false,

  isRaised: false,

  isRipple: false,

  didInsertElement() {
    if (get(this, 'isRipple')) {
      let root = this.element;
      let mdr = MDCRipple.attachTo(root);
      set(this, '_mdRipple', mdr);
    }
  },

  willDestroyElement() {
    if (get(this, 'isRipple')) {
      let mdr = get(this, '_mdRipple');
      mdr.foundation_.destroy();
    }
  }
});
