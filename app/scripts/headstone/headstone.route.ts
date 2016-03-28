/// <reference path="../../../typings/_reference.ts" />
module app.headstone {
    'use strict';

    // Configure the routing for the application.
    angular.module('app.headstone')
        .config(routing);
		
	/**
	 * Function to setup routing for the module.
	 */
    routing.$inject = ['$stateProvider'];
    function routing($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('headstone/:id', {
                url: '/headstone/:id',
                templateUrl: 'scripts/headstone/headstone.html',
                controller: 'app.headstone.HeadstoneController',
                controllerAs: 'vm',
                resolve: {
                    headstone: resolveHeadstone
                }
            })
    }

    resolveHeadstone.$inject = [];
    function resolveHeadstone(): ng.IPromise<any> {
        return;
    }
}