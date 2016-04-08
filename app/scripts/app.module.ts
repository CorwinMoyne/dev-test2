/// <reference path="../../typings/_reference.ts" />

module app {
    'use strict';

    var requiredModules: string[] = [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'ngTouch',
        'ngMap',
        
        'app.home',
        'app.headstones',
        'app.contact'
    ];
    angular.module('app', requiredModules);
}