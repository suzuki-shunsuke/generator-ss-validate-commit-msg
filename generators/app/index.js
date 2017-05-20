'use strict';

const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  writing() {
    this.fs.extendJSON('package.json', {
      scripts: {commitmsg: 'validate-commit-msg'}});
  }

  install() {
    this.yarnInstall(['validate-commit-msg', 'husky'], {dev: true});
  }
};
