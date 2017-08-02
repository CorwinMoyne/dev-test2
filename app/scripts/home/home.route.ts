/// <reference path="../../../typings/_reference.ts" />

module app.home {
    'use strict';

    angular.module('app.home').config(routing);

    routing.$inject = ['$stateProvider'];
    function routing($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('home', {
                url: '/home',
                templateUrl: 'scripts/home/home.html',
                controller: 'app.home.HomeController',
                controllerAs: 'vm'
            })
    }
}