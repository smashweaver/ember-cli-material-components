import Component from '@ember/component';
import layout from '../templates/components/mdc-toolbar-title';

export default Component.extend({
  layout,

  classNames: 'mdc-toolbar__title',

  tagName: 'h1'
});
