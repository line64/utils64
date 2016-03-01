"use strict";

const concat = require('broccoli-concat');
const babel = require('broccoli-babel-transpiler');
const pkg = require('./package.json');

const src = 'src';

const js = babel(src, {
  stage: 0,
  moduleIds: true,
  modules: 'common',
  browserPolyfill: true,

  getModuleId: function (name) {
    name = pkg.name + '/' + name;
    return name.replace(/\/index$/, '');
  },

  resolveModuleSource: function (source, filename) {
    var match = filename.match(/(.+)\/index\.\S+$/i);

    if (match) {
      var path = match[1];
      return source
        .replace(/^\.\//, path + '/')
        .replace(/^\.\.\//, '');
    } else {
      return source;
    }
  }

});

const main = concat(js, {
  inputFiles: [
    '**/*.js'
  ],
  outputFile: 'index.js'
});

module.exports = main;
