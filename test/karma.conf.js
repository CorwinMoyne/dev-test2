// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2016-03-09 using
// generator-karma 1.0.0

module.exports = function(config) {
    'use strict';

    config.set({
        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,
        usePolling: true,

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // testing framework to use (jasmine/mocha/qunit/...)
        // as well as any additional frameworks (requirejs/chai/sinon/...)
        frameworks: [
            "jasmine"
        ],

        // list of files / patterns to load in the browser
        files: [
            // bower:js
            'bower_components/jquery/dist/jquery.js',
            'bower_components/es5-shim/es5-shim.js',
            'bower_components/angular/angular.js',
            'bower_components/json3/lib/json3.js',
            'bower_components/bootstrap/dist/js/bootstrap.js',
            'bower_components/angular-ui-router/release/angular-ui-router.js',
            'bower_components/angular-animate/angular-animate.js',
            'bower_components/angular-touch/angular-touch.js',
            'bower_components/angular-spinner/dist/angular-spinner.min.js',
            'bower_components/d3/d3.js',
            'bower_components/angular-mocks/angular-mocks.js',
            // endbower

            'app/scripts/**/**/*.module.js',
            'app/scripts/**/**/*.model.js',
            'app/scripts/**/**/*.provider.js',
            'app/scripts/**/**/*.config.js',
            'app/scripts/**/**/*.constant.js',
            'app/scripts/**/**/*.route.js',
            'app/scripts/**/**/*.run.js',
            'app/scripts/**/**/*.factory.js',
            'app/scripts/**/**/*.service.js',
            'app/scripts/**/**/*.filter.js',
            'app/scripts/**/**/*.directive.js',
            'app/scripts/**/**/*.controller.js',

            "test/scripts/**/**/**/*.spec.js"
        ],

        // list of files / patterns to exclude
        exclude: [],

        // web server port
        port: 8080,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            // "PhantomJS",
            "Chrome"
        ],

        // Which plugins to enable
        plugins: [
            "karma-phantomjs-launcher",
            "karma-chrome-launcher",
            "karma-jasmine"
        ],

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: false,

        colors: true,

        // level of logging
        // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
        logLevel: config.LOG_INFO,
    });
};