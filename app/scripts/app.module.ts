/// <reference path="../../typings/_reference.ts" />

module app {
    'use strict';

    var requiredModules: string[] = [
        'ui.router',
        'ngAnimate',
        'ngTouch',

        'app.home'
    ];
    angular.module('app', requiredModules);
}