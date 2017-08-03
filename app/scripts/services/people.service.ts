///<reference path="../../../typings/_reference.ts"/>

module app.services {
    'use strict';

    export class PeopleService {

        static $inject: Array<string> = ['app.services.HttpService'];
        constructor(private httpService: app.services.HttpService) { }

        getAllPeople(): ng.IPromise<any> {
            return this.httpService.get('app/api/people.json').then((response: any) => {
                return response.data;
            });
        }
    }
    angular.module('app.services').service('app.services.PeopleService', PeopleService);
}