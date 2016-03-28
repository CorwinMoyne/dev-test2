/// <reference path="../../../typings/_reference.ts" />

module app.home {
    'use strict';

    export interface IHomeImagesService {
        getCarouselImages(): ng.IPromise<any>;
    }

    export class HomeImagesService implements IHomeImagesService {

        static $inject = ['$http'];
        constructor(
            private $http: ng.IHttpService) { }

        getCarouselImages(): ng.IPromise<any> {
            return this.$http.get('/api/carousel').then((response: any) => {
                return response.data;
            });
        }
    }
    angular.module('app.home').service('app.home.HomeImagesService', HomeImagesService);
}