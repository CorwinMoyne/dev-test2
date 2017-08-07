/// <reference path="../../../typings/_reference.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />

module app.home {
    'use strict';

    describe('Home Controller', () => {

        var controller: app.home.HomeController;

        beforeEach(() => {
            angular.mock.module('app');
            angular.mock.inject([
                '$controller', (
                    $controller: ng.IControllerService) => {
                    controller = $controller('app.home.HomeController', {
                        'allJobs': {},
                        'jobfamilies': {},
                        'jobForJobFamilies': {},
                        'pathway': {}
                    });
                }]);
        });

        fit('should return title', () => {
            let title = controller.title(0);
            expect(title).toBe('Job Family');
            title = controller.title(1)
            expect(title).toBe('Role Profiles at or above your paygrade wothin the cybersecurity job family');
        });
    });
}