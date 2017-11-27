/* eslint-env node */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-material-components',

  included(app) {
    this._super.included.apply(this, arguments);
  }
};
