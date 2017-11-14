import Component from '@ember/component';
import layout from '../templates/components/mdc-toolbar';
import { get, set } from '@ember/object';
import { MDCToolbar } from './-material/toolbar';

export default Component.extend({
  layout,

  tagName: 'header',

  classNames: 'mdc-toolbar',

  classNameBindings: [
    'isFixed:mdc-toolbar--fixed',
    'isWaterfall:mdc-toolbar--waterfall'
  ],

  isFixed: true,

  isWaterfall: true,

  didInsertElement() {
    let mdc = new MDCToolbar(this.element);
    set(this, '_mdComponent', mdc);
  },

  willDestroyElement() {
    let mdc = get(this, '_mdComponent');
    mdc.destroy();
  }
});
