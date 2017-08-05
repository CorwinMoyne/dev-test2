// <reference path="../../../typings/_reference.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />

module app.communities {
    'use strict';

    describe('Communities Controller', () => {

        let filter: any;
        let people: any = [
            { nm: "Aaberg", va: "v0" },
            { nm: "Baby", va: "v0" },
            { nm: "Cadland", va: "v0" },
            { nm: "Aaber", va: "v0" },
            { nm: "AAA", va: "v0" },
            { nm: "Cad", va: "v0" }
        ];

        beforeEach(() => {
            angular.mock.module('app');
            angular.mock.inject([
                '$filter', (
                    $filter: ng.IFilterService) => {
                    filter = $filter('names')
                }]);
        });

        fit('should filter names by first letter', () => {
            let names = filter(people, 'a');
            expect(names.length).toBe(3);

            names = filter(people, 'b');
            expect(names.length).toBe(1);

            names = filter(people, 'c');
            expect(names.length).toBe(2);

            names = filter(people, 'd');
            expect(names.length).toBe(0);
        });
            
    });
}