/// <reference path="../../../typings/_reference.ts" />

module app.home {
    'use strict';

    export class HomeController {

        businessUnit: string = 'technology';

        static $inject = [
            'allJobs',
            'jobfamilies',
            'jobForJobFamilies',
            'pathway'
        ];
        constructor(
            public allJobs,
            public jobfamilies,
            public jobForJobFamilies,
            public pathway) {
                console.log(this.jobfamilies.rows);
                console.log(this.jobForJobFamilies.rows);
                
            }
    }
    angular.module('app.home').controller('app.home.HomeController', HomeController);
}