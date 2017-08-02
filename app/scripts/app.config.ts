/// <reference path="../../typings/_reference.ts" />

module app {
    'use strict';

    angular.module('app').config(config);

    config.$inject = ['$locationProvider', '$urlRouterProvider'];
    function config(
        $locationProvider: angular.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');
    }
}