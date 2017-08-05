///<reference path="../../../typings/_reference.ts"/>

module app.services {
    'use strict';

    export class PeopleService {

        static $inject: string[] = [
            'app.services.HttpService'
        ];
        constructor(
            private httpService: app.services.HttpService) { }

        getAllPeople(): ng.IPromise<any> {
            return this.httpService.request(app.services.HttpRequestType.GET, '../api/people.json')
                .then((response: any) => {
                    return response.data;
                }).catch((error: any) => {
                    // handle error
                    // send to log
                });
        }
    }
    angular.module('app.services').service('app.services.PeopleService', PeopleService);
}