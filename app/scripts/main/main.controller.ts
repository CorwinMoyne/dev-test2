/// <reference path="../../../typings/_reference.ts" />

module app {
    'use strict';

    class MainCtrl {

        static $inject = ['$http'];
        constructor(
            private $http: ng.IHttpService) {
            this.$http.get('/api/headstones').then((response: any) => {
                console.log(response.data);
            });
        }
    }
    angular.module('app').controller('app.MainCtrl', MainCtrl)
}


