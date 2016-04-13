/// <reference path="../../../typings/_reference.ts" />

module app.headstones {
    'use strict';

    export interface IHeadstonesService {
        getHeadstones(): ng.IPromise<any>;
    }

    export class HeadstonesService implements IHeadstonesService {

        static $inject = ['$http'];
        constructor(
            private $http: ng.IHttpService) { }

        getHeadstones(): ng.IPromise<any> {
            return this.$http.get('/api/headstones').then((response: ng.IHttpPromiseCallbackArg<any>) => {
                return response.data;
            });
        }
    }
    angular.module('app.headstones').service('app.headstones.HeadstonesService', HeadstonesService);
}