const path = require('path');
const pkg = require('./package');

module.exports = {
  entry: {
    play: 'internals/play/index.js',
    app: 'internals/play/app.js',
    preview: 'internals/play/preview.js'
  },
  hotEntry: ['preview'],
  dist: 'dist-play',
  port: 9001,
  // compile Vue template
  templateCompiler: true,
  webpack (config) {
    config.resolve.modules.push(path.resolve('source'));
    return config;
  },
  // no code split for 3rd party libraries
  vendor: false,
  html: [{
    chunks: ['app'],
    filename: 'index.html',
    title: pkg.name
  }, {
    chunks: ['preview'],
    filename: 'preview.html'
  }]
};
