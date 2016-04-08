/// <reference path="../../../typings/_reference.ts" />
module app.about {
    'use strict';

    // Configure the routing for the application.
    angular.module('app.about')
        .config(routing);
		
	/**
	 * Function to setup routing for the module.
	 */
    routing.$inject = ['$stateProvider'];
    function routing($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('about', {
                url: '/headstone/:id',
                templateUrl: 'scripts/about/about.html',
                 controller: '',
                 controllerAs: 'vm',
              
            })
    }

 
}