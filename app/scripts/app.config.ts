/// <reference path="../../typings/_reference.ts" />

module app {
    'use strict';

    // Configure the module.
    angular.module('app')
        .config(config);

	/**
	 * Function to configure the module.
	 */
    config.$inject = ['$locationProvider', '$urlRouterProvider', 'usSpinnerConfigProvider'];
    function config(
        $locationProvider: angular.ILocationProvider, $urlRouterProvider: ng.ui.IUrlRouterProvider, usSpinnerConfigProvider: any) {
        $locationProvider.html5Mode(true);
        $urlRouterProvider.otherwise('/home');
        usSpinnerConfigProvider.setDefaults({color: '#cbad5d'});
    }
}