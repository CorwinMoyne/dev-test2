/// <reference path='../../../../typings/_reference.ts' />
// declare var d3: any;
module app.charts {
    'use strict';

    class DonutChart implements ng.IDirective {
        restrict: string = 'E';
        scope: any = {
            data: '='
        };
        link: ng.IDirectiveLinkFn = (scope: ng.IScope, element: any) => {
            let data = scope['data'];
            console.log('hello');
            
        };
        static instance(): ng.IDirectiveFactory {
            const factory: ng.IDirectiveFactory = (): ng.IDirective => {
                return new DonutChart();
            };
            return factory;
        }
    }
    angular.module('app.charts').directive('iqDonutChart', DonutChart.instance());
}