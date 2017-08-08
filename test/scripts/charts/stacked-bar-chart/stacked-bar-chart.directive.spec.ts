/// <reference path="../../../../typings/_reference.ts" />
/// <reference path="../../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />

module app.charts {
    'use strict';

    describe('Stacked bar chart Directive', () => {

        let element: ng.IAugmentedJQuery;
        let jobFamilies = [{
            "class": "iq4.dto.JobFamilyPathwaysDTO",
            "description": "Maintains application systems that have completed the development stage and are running in the daily operations of the firm; provides production support for all internally and externally developed systems and applications, ensuring that service is delivered in an uninterrupted manner.\n",
            "jobFamily": "Applications Support",
            "jobFamilyId": 39,
            "needs": 72,
            "sharedNeedsmore": 3,
            "sharedProficient": 9
        },
        {
            "class": "iq4.dto.JobFamilyPathwaysDTO",
            "description": "Responsible for technical planning within the technology organization; architects interpret business strategy into target state Architecture utilizing patterns, cost models, and industry best practices.\n",
            "jobFamily": "Architecture",
            "jobFamilyId": 40,
            "needs": 10,
            "sharedNeedsmore": 0,
            "sharedProficient": 4
        }];

        beforeEach(() => {
            angular.mock.module('app.charts');
            angular.mock.inject([
                '$httpBackend',
                '$rootScope',
                '$compile', (
                    $httpBackend: ng.IHttpBackendService,
                    $rootScope: ng.IRootScopeService,
                    $compile: ng.ICompileService) => {

                    let scope = $rootScope.$new();
                    scope.title = 'Job Family';
                    scope.jobFamilies = jobFamilies;
                    scope.selector = 'jobFamily';
                    let html: ng.IAugmentedJQuery =
                        angular.element(
                            '<div class="form-group" id="selectory"> ' +
                            '<iq-stacked-bar-chart data="jobFamilies" label-key="selector" selector="selector" title="title"></iq-stacked-bar-chart> ' +
                            '</div>');
                    element = $compile(html)(scope);
                    scope.$apply();
                }]);
        });

        it('should create a stacked bar chart', () => {
            expect(element.find('iq-stacked-bar-chart')).toBeDefined();
            expect(element.find('svg')).toBeDefined();
        });

        it('should create a layer for each colour', () => {
            expect(element.find('.layer').length).toBe(3);
        });

        it('should create 3 rects for each bar', () => {
            expect(element.find('rect').length).toBe(3 * jobFamilies.length);
        });
    });
}