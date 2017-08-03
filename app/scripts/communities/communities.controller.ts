/// <reference path="../../../typings/_reference.ts" />

module app.communities {
    'use strict';

    export class CommunitiesController {

        static $inject = ['people'];
        constructor(public people) {
            console.log(this.people);
        }
    }
    angular.module('app.communities').controller('app.communities.CommunitiesController', CommunitiesController);
}