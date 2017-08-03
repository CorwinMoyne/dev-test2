/// <reference path="../../../typings/_reference.ts" />

module app.communities {
    'use strict';

    export class CommunitiesController {

        currentIndex: number = 1;
        itemsPerPage: number = 18;
        peopleToDisplay: any[];
        alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');

        static $inject = ['people'];
        constructor(private people) {
            this.setPeopleToDisplay();
        }

        loadMore(): void {
            this.currentIndex += this.itemsPerPage;
            this.setPeopleToDisplay();
        }

        private setPeopleToDisplay(): void {
            this.peopleToDisplay = this.people.splice(this.currentIndex, this.itemsPerPage);
        }
    }
    angular.module('app.communities').controller('app.communities.CommunitiesController', CommunitiesController);
}