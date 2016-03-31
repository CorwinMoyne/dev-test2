/// <reference path="../../typings/_reference.ts" />

module app {
    'use strict';

    var requiredModules: string[] = [
        'ui.router',
        'ui.bootstrap',
        'ngAnimate',
        'ngTouch',
        
        'app.home',
        'app.headstone',
        'app.headstones',
        'app.contact'
    ];
    angular.module('app', requiredModules);
}