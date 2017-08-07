/// <reference path="../../../typings/_reference.ts" />

module app.home {
    'use strict';

    export class HomeController {

        private titles: string[] = [
            'Job Family',
            'Role Profiles at or above your paygrade wothin the cybersecurity job family'
        ];
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
            public pathway) { }

        /**
         * returns the title to be used in iq-stacked-bar-chart
         * @param  {number} index
         * @returns string
         */
        title(index: number): string {
            return this.titles[index];
        }
    }
    angular.module('app.home').controller('app.home.HomeController', HomeController);
}