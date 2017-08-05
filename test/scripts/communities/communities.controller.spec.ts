/// <reference path="../../../typings/_reference.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />

module app.communities {
    'use strict';

    describe('Communities Controller', () => {

        let controller: app.communities.CommunitiesController;
        let people: any = [
            { nm: "Aaberg", va: "v0" },
            { nm: "Aaby", va: "v0" },
            { nm: "Aadland", va: "v0" }
        ];

        beforeEach(() => {
            angular.mock.module('app');
            angular.mock.inject([
                '$controller', (
                    $controller: ng.IControllerService) => {
                    controller = <app.communities.CommunitiesController>
                        $controller('app.communities.CommunitiesController', {
                            'people': people
                        });
                }]);
        });

        it('should inject people', () => {
            expect(people).toBeDefined();
            expect(people.length).toBe(3);
        });

        it('should increment limitTo by itemsPerPage', () => {
            expect(controller.limitTo).toBe(0);
            controller.loadMore();
            expect(controller.limitTo).toBe(controller.itemsPerPage);
        });

        it('should set selected letter and selected letter index', () => {
            controller.onLetterClick(3);
            expect(controller.selectedLetter).toBe('d');
            expect(controller.selectedLetterIndex).toBe(3);
        });
    });
}