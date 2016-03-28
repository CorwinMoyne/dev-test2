/// <reference path="../../typings/_reference.ts" />

module app {
    'use strict';

    // Configure the module.
    angular.module('app')
        .config(config);

	/**
	 * Function to configure the module.
	 */
    config.$inject = ['$locationProvider', '$urlRouterProvider'];
    function config(
        $locationProvider: angular.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');
    }
}