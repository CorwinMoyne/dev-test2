/// <reference path="../../typings/_reference.ts" />

module app {
    'use strict';

    var requiredModules: string[] = [
        'ui.router',
        'ngAnimate',
        'ngTouch',

        'angularSpinner',

        'app.home',
        'app.services',
        'app.charts'
    ];
    angular.module('app', requiredModules);
}