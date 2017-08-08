/// <reference path="../../../../typings/_reference.ts" />
/// <reference path="../../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />

module app.charts {
    'use strict';

    describe('Path Chart Directive', () => {

        let element: ng.IAugmentedJQuery;
        let pathway = [{"class":"iq4.model.Pathway","distance":15,"id":3,"steps":[{"class":"iq4.model.PathwayStep","distance":15,"id":3,"jobPayGrade":{"class":"iq4.model.JobPayGrade","job":{"class":"iq4.model.Job","id":174},"payGrade":{"class":"iq4.model.PayGrade","code":"601"}},"seq":1},{"class":"iq4.model.PathwayStep","distance":8.06225774829855,"id":4,"jobPayGrade":{"class":"iq4.model.JobPayGrade","job":{"class":"iq4.model.Job","id":183},"payGrade":{"class":"iq4.model.PayGrade","code":"603"}},"seq":0}],"target":{"class":"iq4.model.JobPayGrade","id":2339,"job":{"class":"iq4.model.Job","id":174},"payGrade":{"class":"iq4.model.PayGrade","code":"604"}},"user":{"class":"iq4.model.User","id":6}},{"class":"iq4.model.Pathway","distance":29.29163703175362,"id":5,"steps":[{"class":"iq4.model.PathwayStep","distance":29.29163703175362,"id":7,"jobPayGrade":{"class":"iq4.model.JobPayGrade","job":{"class":"iq4.model.Job","id":185},"payGrade":{"class":"iq4.model.PayGrade","code":"601"}},"seq":0}],"target":{"class":"iq4.model.JobPayGrade","id":2360,"job":{"class":"iq4.model.Job","id":185},"payGrade":{"class":"iq4.model.PayGrade","code":"601"}},"user":{"class":"iq4.model.User","id":6}}];
        let allJobs = [{
            author: {"email":"kyle@iq4.com","firstName":"Kyle","id":6,"lastName":"Hamilton","userId":"jpmc"},
            name: "BB-test",
            jobFamily: {
                jobFamily: "Applications Support"
            }
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

                    $httpBackend.whenGET('../json/all-jobs.json').respond(allJobs);
                    $httpBackend.whenGET('.../json/job-families.json').respond({});
                    let scope = $rootScope.$new();
                    scope.pathway = pathway;
                    scope.allJobs = allJobs;
                    scope.selector = 'path';
                    let html: ng.IAugmentedJQuery =
                        angular.element(
                            '<div class="form-group" style="width:500;height:500;"> ' +
                            '<iq-path-chart data="pathway" all-jobs="allJobs" selector="selector">' + 
                            '</iq-path-chart>' + 
                            '</div>');
                    element = $compile(html)(scope);
                    scope.$apply();
                }]);
        });

        it('should create a path chart', () => {
            expect(element.find('iq-path-chart')).toBeDefined();
            expect(element.find('svg')).toBeDefined();
        });

        it('should create an image', () => {
            expect(element.find('#image')).toBeDefined();
        });
           
        it('should draw 5 lines', () => {
           expect(element.find('line').length).toBe(5); 
        });
        
        it('should append text', () => {
           expect(element.find('text').length).toBe(5); 
        });

        it('should write the user name', () => {
            expect(element.find('text')[0].innerHTML).toBe('Kyle Hamilton');
        });

        it('should write the user job title', () => {
            expect(element.find('text')[1].innerHTML).toBe('Applications Support');
        });
    });
}