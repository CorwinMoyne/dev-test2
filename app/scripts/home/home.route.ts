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
                controllerAs: 'vm',
                resolve: {
                    allJobs: allJobs,
                    jobfamilies: jobFamilies,
                    jobForJobFamilies: jobForJobFamilies,
                    pathway: pathway
                }
            })
    }
    
    allJobs.$inject = ['app.services.ChartService'];
    function allJobs(chartService: app.services.ChartService): ng.IPromise<any> {
        return chartService.getAllJobs();
    }

    jobFamilies.$inject = ['app.services.ChartService'];
    function jobFamilies(chartService: app.services.ChartService): ng.IPromise<any> {
        return chartService.getJobFamilies();
    }

    jobForJobFamilies.$inject = ['app.services.ChartService'];
    function jobForJobFamilies(chartService: app.services.ChartService): ng.IPromise<any> {
        return chartService.getJobsForJobFamily();
    }

    pathway.$inject = ['app.services.ChartService'];
    function pathway(chartService: app.services.ChartService): ng.IPromise<any> {
        return chartService.getPathway();
    }
}