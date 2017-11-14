import Component from '@ember/component';
import layout from '../templates/components/mdc-toolbar-section';

export default Component.extend({
  layout,

  classNames: 'mdc-toolbar__section',

  classNameBindings: [
    'isAlignStart:mdc-toolbar__section--align-start'
  ],

  isAlignStart: true,

  tagName: 'section'
});
