/// <reference path="../../../typings/_reference.ts" />

module app.communities {
    'use strict';

    angular.module('app.communities').config(routing);

    routing.$inject = ['$stateProvider'];
    function routing($stateProvider: angular.ui.IStateProvider) {
        $stateProvider
            .state('communities', {
                url: '/communities',
                templateUrl: 'scripts/communities/communities.html',
                controller: 'app.communities.CommunitiesController',
                controllerAs: 'vm',
                resolve: {
                    people: resolvePeople
                }
            })
    }
    
    resolvePeople.$inject = ['app.services.PeopleService'];
    function resolvePeople(peopleService: app.services.PeopleService): ng.IPromise<any> {
        return peopleService.getAllPeople();
    }
}