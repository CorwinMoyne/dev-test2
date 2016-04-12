/// <reference path="../../../typings/_reference.ts" />

module app.home {
    'use strict';

    // Configure the routing for the application.
    angular.module('app.home')
        .config(routing);
		
	/**
	 * Function to setup routing for the module.
	 */
    routing.$inject = ['$stateProvider'];
    function routing($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'scripts/home/home.html',
                controller: 'app.home.HomeController',
                controllerAs: 'vm',
                resolve: {
                    // images: resolveImages
                }
            })
    }

    resolveImages.$inject = ['app.home.HomeImagesService'];
    function resolveImages(homeImagesService: app.home.IHomeImagesService): ng.IPromise<any> {
        return homeImagesService.getCarouselImages().then((data) => {
            return data;
        });
    }
}