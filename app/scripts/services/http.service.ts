///<reference path="../../../typings/_reference.ts"/>

module app.services {
    'use strict';

    export class HttpService {

        private loadingCount: number = 0;

        static $inject: string[] = [
            '$rootScope',
            '$http',
            '$q'
        ];
        constructor(
            private $rootScope: ng.IRootScopeService,
            private $http: ng.IHttpService,
            private $q: ng.IQService) { }

        get(url: string, config?: any): ng.IPromise<any> {
            this.userFlowLoading();
            return this.$http.get(url, config).then((response: ng.IHttpPromiseCallbackArg<any>) => {
                return response;
            }).catch((response: ng.IHttpPromiseCallbackArg<any>) => {
                return this.$q.reject(response);
            }).finally(() => {
                this.userFlowLoadComplete();
            });
        }

        delete(url: string, config?: any): ng.IPromise<any> {
            this.userFlowLoading();
            return this.$http.delete(url, config).then((response: ng.IHttpPromiseCallbackArg<any>) => {
                return response;
            }).catch((response: ng.IHttpPromiseCallbackArg<any>) => {
                return this.$q.reject(response);
            }).finally(() => {
                this.userFlowLoadComplete();
            });
        }

        post(url: string, data: any, config?: any): ng.IPromise<any> {
            this.userFlowLoading();
            return this.$http.post(url, data, config).then((response: ng.IHttpPromiseCallbackArg<any>) => {
                return response;
            }).catch((response: ng.IHttpPromiseCallbackArg<any>) => {
                return this.$q.reject(response);
            }).finally(() => {
                this.userFlowLoadComplete();
            });
        }

        put(url: string, data: any, config?: any): ng.IPromise<any> {
            this.userFlowLoading();
            return this.$http.put(url, data, config).then((response: ng.IHttpPromiseCallbackArg<any>) => {
                return response;
            }).catch((response: ng.IHttpPromiseCallbackArg<any>) => {
                return this.$q.reject(response);
            }).finally(() => {
                this.userFlowLoadComplete();
            });
        }

        /**
         * Indicates a transition is in progress.
         */
        userFlowLoading(): void {
            this.loadingCount++;
            this.$rootScope['isUserFlowLoading'] = true;
        }

        /**
         * Indicates transition is complete.
         */
        userFlowLoadComplete(): void {
            this.loadingCount--;
            if (this.loadingCount <= 0) {
                this.loadingCount = 0;
                this.$rootScope['isUserFlowLoading'] = false;
            }
        }
    }
    angular.module('app.services').service('app.services.HttpService', HttpService);
}