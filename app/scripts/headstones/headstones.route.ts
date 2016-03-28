/// <reference path="../../../typings/_reference.ts" />
module app.headstones {
    'use strict';

    // Configure the routing for the application.
    angular.module('app.headstones')
        .config(routing);
		
	/**
	 * Function to setup routing for the module.
	 */
    routing.$inject = ['$stateProvider'];
    function routing($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('headstones', {
                url: '/headstones',
                templateUrl: 'scripts/headstones/headstones.html',
                controller: 'app.headstones.HeadstonesController',
                controllerAs: 'vm',
                resolve: {
                    headstones: resolveHeadstones
                }
            })
    }

    resolveHeadstones.$inject = [];
    function resolveHeadstones(): ng.IPromise<any> {
        return;
    }
}