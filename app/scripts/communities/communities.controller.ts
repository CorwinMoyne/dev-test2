/// <reference path="../../../typings/_reference.ts" />

module app.communities {
    'use strict';

    export class CommunitiesController {

        itemsPerPage: number = 18;
        limitTo: number = 0;
        alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('');
        selectedLetter: string;
        selectedLetterIndex: number;

        static $inject = [
            'people'
        ];
        constructor(
            public people) { }

        /**
         * load the next {itemsPerPage} number of items 
         * @returns void
         */
        loadMore(): void {
            this.limitTo += this.itemsPerPage;
        }
        /**
         * updates the selected letter when it is clicked
         * the selected letter is then highlighted with a class and passed to the custom filter
         * @param  {number} index
         * @returns void
         */
        onLetterClick(index: number): void {
            this.selectedLetter = this.alphabet[index];
            this.selectedLetterIndex = index;
        }
    }
    angular.module('app.communities').controller('app.communities.CommunitiesController', CommunitiesController);
}