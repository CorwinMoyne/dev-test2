/// <reference path="../../../../typings/_reference.ts" />
/// <reference path="../../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../../typings/jasmine/jasmine.d.ts" />

module app.charts {
    'use strict';

    describe('Chart Directive', () => {

        // todo: finish tests. ran out of time.

        // let element: ng.IAugmentedJQuery;
        // let pathway = [{"class":"iq4.model.Pathway","distance":15,"id":3,"steps":[{"class":"iq4.model.PathwayStep","distance":15,"id":3,"jobPayGrade":{"class":"iq4.model.JobPayGrade","job":{"class":"iq4.model.Job","id":174},"payGrade":{"class":"iq4.model.PayGrade","code":"601"}},"seq":1},{"class":"iq4.model.PathwayStep","distance":8.06225774829855,"id":4,"jobPayGrade":{"class":"iq4.model.JobPayGrade","job":{"class":"iq4.model.Job","id":183},"payGrade":{"class":"iq4.model.PayGrade","code":"603"}},"seq":0}],"target":{"class":"iq4.model.JobPayGrade","id":2339,"job":{"class":"iq4.model.Job","id":174},"payGrade":{"class":"iq4.model.PayGrade","code":"604"}},"user":{"class":"iq4.model.User","id":6}},{"class":"iq4.model.Pathway","distance":29.29163703175362,"id":5,"steps":[{"class":"iq4.model.PathwayStep","distance":29.29163703175362,"id":7,"jobPayGrade":{"class":"iq4.model.JobPayGrade","job":{"class":"iq4.model.Job","id":185},"payGrade":{"class":"iq4.model.PayGrade","code":"601"}},"seq":0}],"target":{"class":"iq4.model.JobPayGrade","id":2360,"job":{"class":"iq4.model.Job","id":185},"payGrade":{"class":"iq4.model.PayGrade","code":"601"}},"user":{"class":"iq4.model.User","id":6}}];
        // let allJobs = [{
        //     author: {"email":"kyle@iq4.com","firstName":"Kyle","id":6,"lastName":"Hamilton","userId":"jpmc"},
        //     name: "BB-test",
        //     jobFamily: {
        //         jobFamily: "Applications Support"
        //     }
        // }];

        // beforeEach(() => {
        //     angular.mock.module('app');
        //     angular.mock.inject([
        //         '$rootScope',
        //         '$compile', (
        //             $rootScope: ng.IRootScopeService,
        //             $compile: ng.ICompileService) => {

        //             let scope = $rootScope.$new();
        //             scope.pathway = pathway;
        //             scope.allJobs = allJobs;
        //             scope.selector = 'path';
        //             let html: ng.IAugmentedJQuery =
        //                 angular.element(
        //                     '<div id="selector" class="form-group" style="width:500;height:500;"> ' +
        //                     '<iq-path-chart data="pathway" all-jobs="allJobs" selector="selector">' + 
        //                     '</iq-path-chart>' + 
        //                     '</div>');
        //             element = $compile(html)(scope);
        //             scope.$apply();
        //             scope = element.isolateScope();
        //         }]);
        // });

        // it('should create a path chart', () => {
        //     expect(true).toBeTruthy();
        // });
    });
}