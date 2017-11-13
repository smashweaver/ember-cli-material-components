/* eslint-env node */
'use strict';

let Funnel = require('broccoli-funnel');
let mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-material-components',

  included: function(app) {
    this._super.included.apply(this, arguments);
  }

  /*treeForPublic: function(tree) {
    let assetsTree = new Funnel('public');
    return mergeTrees([tree, assetsTree], {
      overwrite: true
    });
  }*/
};
