/// <reference path="../../../typings/_reference.ts" />


module app {
    'use strict';

    class MainCtrl {

        awesomeThings: any[] = [];
        loading: boolean = true;

        static $inject = ['$http'];
        constructor(
            private $http: ng.IHttpService) {
            this.init();
        }
        
        init(): void {
            this.getFeatures();
        }

        getFeatures(): any {
            this.$http.get('/api/features').then((response: any) => {
                this.loading = false;
                this.awesomeThings = response.data;
                console.log(this.awesomeThings);

                angular.forEach(this.awesomeThings, (thing) => {
                    var thing: any;
                    thing.loading = true;

                    this.$http.get(thing.href).then((response: any) => {
                        thing.loading = false;
                        thing.description = response.data.description;
                    });
                });
            });
        }

        createUnknownError(status) {
            return {
                status: status,
                statusText: 'Internal Server Error',
                description: 'No details available'
            };
        }

    }
    angular.module('app').controller('app.MainCtrl', MainCtrl)
}


