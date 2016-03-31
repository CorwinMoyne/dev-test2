/// <reference path="../../../typings/_reference.ts" />
/// <reference path="../../../typings/angularjs/angular-mocks.d.ts" />
/// <reference path="../../../typings/jasmine/jasmine.d.ts" />

module app.home {
    'use strict';

    describe('Home Controller', () => {

        var images: any;
        var controller: any;

        beforeEach(angular.mock.module('app'));
        
        beforeEach(angular.mock.module('app.home', ($provide: ng.auto.IProvideService) => {
            $provide.value('images', {});
        }));

        beforeEach(inject(($controller: ng.IControllerService) => {
            controller = $controller('app.home.HomeController', { 
                images 
            });
        }));

        it('should define the home controller', () => {
            expect(controller).toBeDefined();
        });
    });
}