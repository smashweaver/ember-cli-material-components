/* eslint-env node */
module.exports = {
  normalizeEntityName() {},

  afterInstall(options) {
    return this.addAddonsToProject({
      packages: [
        { name: 'ember-cli-sass' }
      ]
    })
    .then(() => {
      return this.addPackagesToProject([
        { name: 'material-components-web', target: '^0.29.0' }
      ]);
    });
  }
};
