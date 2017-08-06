///<reference path="../../../typings/_reference.ts"/>

module app.services {
    'use strict';

    export class ChartService {

        static $inject: string[] = [
            'app.services.HttpService'
        ];
        constructor(
            private httpService: app.services.HttpService) { }

        getAllJobs(): ng.IPromise<any> {
            return this.httpService.request(app.services.HttpRequestType.GET, '../json/all-jobs.json')
                .then((response: any) => {
                    return response.data;
                }).catch((error: any) => {
                    // handle error
                    // send to log
                });
        }

        getJobFamilies(): ng.IPromise<any> {
            return this.httpService.request(app.services.HttpRequestType.GET, '../json/job-families.json')
                .then((response: any) => {
                    return response.data;
                }).catch((error: any) => {
                    // handle error
                    // send to log
                });
        }

        getJobsForJobFamily(): ng.IPromise<any> {
            return this.httpService.request(app.services.HttpRequestType.GET, '../json/jobs-for-job-family.json')
                .then((response: any) => {
                    return response.data;
                }).catch((error: any) => {
                    // handle error
                    // send to log
                });
        }

        getPathway(): ng.IPromise<any> {
            return this.httpService.request(app.services.HttpRequestType.GET, '../json/pathway-graph.json')
                .then((response: any) => {
                    return response.data;
                }).catch((error: any) => {
                    // handle error
                    // send to log
                });
        }
    }
    angular.module('app.services').service('app.services.ChartService', ChartService);
}