/// <reference path="../../typings/_reference.ts" />

module app {
    'use strict';

    angular.module('app')
        .run(run);

    run.$inject = ['$rootScope'];
    function run($rootScope: ng.IRootScopeService): void {
        $rootScope.$on('$stateChangeStart', (event: any, toState: any, toStateParams: any) => {
            $rootScope['showSpinner'] = true;
        });
        $rootScope.$on('$stateChangeSuccess', (event: any, toState: any, toStateParams: any) => {
            $rootScope['showSpinner'] = false;
        });
    }
}