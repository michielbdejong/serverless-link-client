module.exports = function(config) {
  config.set({

    // Base path that will be used to resolve all patterns (eg. files, exclude).
    basePath: 'dist/app',

    frameworks: ['mocha', 'chai', 'chai-as-promised', 'chai-sinon'],

    // List of files / patterns to load in the browser.
    files: [
      'components/react/react.js',
      'components/react/react-dom.js',

      // We want react libs to be included before RequireJS (as React is defined
      // as anonymous AMD module that conflicts with RequreJS), so we should
      // include RequireJS and adapter scripts to the files list manually.
      '../../node_modules/requirejs/require.js',
      '../../node_modules/karma-requirejs/lib/adapter.js',

      { pattern: './**/*.js', included: false },
      { pattern: '../tests/unit/**/*.js', included: false },
      '../tests/unit/test-main.js'
    ],

    // Test results reporter to use.
    reporters: ['mocha'],

    // Web server port.
    port: 9876,

    // Enable / disable colors in the output (reporters and logs).
    colors: true,

    // Level of logging. Possible values: config.LOG_DISABLE || config.LOG_ERROR
    // || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG.
    logLevel: config.LOG_INFO,


    // Enable / disable watching file and executing tests whenever any file
    // changes.
    autoWatch: true,

    // Start these browsers, available browser launchers:
    // https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Firefox'],


    // Continuous Integration mode, if true, Karma captures browsers, runs the
    // tests and exits.
    singleRun: false,

    // Concurrency level, how many browsers can be started simultaneously.
    concurrency: Infinity
  })
};