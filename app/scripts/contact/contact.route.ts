/// <reference path="../../../typings/_reference.ts" />
module app.contact {
    'use strict';

    // Configure the routing for the application.
    angular.module('app.contact')
        .config(routing);
		
	/**
	 * Function to setup routing for the module.
	 */
    routing.$inject = ['$stateProvider'];
    function routing($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('contact', {
                url: '/contact',
                templateUrl: 'scripts/contact/contact.html',
                controller: 'app.contact.ContactController',
                controllerAs: 'vm',
                resolve: {
                    contact: resolveContact
                }
            })
    }

    resolveContact.$inject = [];
    function resolveContact(): ng.IPromise<any> {
        return;
    }
}