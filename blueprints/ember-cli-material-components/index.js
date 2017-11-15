/* eslint-env node */
module.exports = {
  normalizeEntityName() {},

  afterInstall(options) {
    return this.addPackagesToProject([
      { name: '@material/button', target: '0.25.0' },
      { name: '@material/toolbar', target: '0.25.0' },
      { name: '@material/typography', target: '0.3.0' }
    ]);
  }
};
