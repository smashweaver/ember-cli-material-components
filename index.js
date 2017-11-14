/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-cli-material-components',

  included(app) {
    this._super.included.apply(this, arguments);
  },

  /*treeForPublic: function(tree) {
    let assetsTree = new Funnel('public');
    return mergeTrees([tree, assetsTree], {
      overwrite: true
    });
  }*/
};
