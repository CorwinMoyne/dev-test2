/// <reference path="../../typings/_reference.ts" />

module app {
    'use strict';

    var requiredModules: string[] = [
        'ui.router',
        'ngAnimate',
        'ngTouch',

        'app.home',
        'app.communities',

        'app.services'
    ];
    angular.module('app', requiredModules);
}