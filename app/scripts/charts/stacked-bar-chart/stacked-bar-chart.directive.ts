/// <reference path='../../../../typings/_reference.ts' />
declare let d3: any;
module app.charts {
    'use strict';

    class StackedBarChart implements ng.IDirective {
        restrict: string = 'E';
        scope: any = {
            data: '='
        };
        link: ng.IDirectiveLinkFn = (scope: ng.IScope, element: any) => {
            let data = scope['data'];
            console.log(data);
            let margin = { top: 0, right: 0, bottom: 0, left: 0 },
                width = 500 - margin.left - margin.right,
                height = 400 - margin.top - margin.bottom;
            let colours = ['#1d8074', '#e0e76f', '#e0e2e0'];
            let values = [];
            data.forEach(d => {
                values.push(d.needs);
                values.push(d.sharedNeedsmore);
                values.push(d.sharedProficient);
            });
            let types = ['sharedProficient', 'sharedNeedsmore', 'needs'];
            let layers = d3.layout.stack()(types.map(function (type) {
                return data.map(function (d, i) {
                    return { x: i, y: d[type] };
                });
            }));

            let yGroupMax = d3.max(layers, function (layer) { return d3.max(layer, function (d) { return d.y; }); })
            let yStackMax = d3.max(layers, function (layer) { return d3.max(layer, function (d) { return d.y0 + d.y; }); });

            let y = d3.scale.ordinal()
                .domain(d3.range(data.length))
                .rangeRoundBands([2, height], .7);

            let x = d3.scale.linear()
                .domain([0, yStackMax])
                .range([0, width]);

            let labels = data.map(function (d) { return d.jobFamily; });

            let svg = d3.select(element[0])
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
    
            let layer = svg.selectAll(".layer")
                .data(layers)
                .enter()
                .append("g")
                .attr("class", "layer")
                .style("fill", function (d, i) { return colours[i]; });

            layer.selectAll("rect")
                .data(function (d) { return d; })
                .enter()
                .append("rect")
                .attr("y", function (d) {
                    return y(d.x);
                })
                .attr("x", function (d) { return x(d.y0); })
                .attr("height", y.rangeBand())
                .attr("width", function (d) { return x(d.y); });

            layer.selectAll('text')
                .data(layers[0])
                .enter()
                .append('text')
                .text((d, i) => {
                    return labels[i];
                })
                .attr({
                    'text-anchor': 'start',
                    "y": function (d, i) {
                        return y(d.x) - 10;
                    },
                    "x": function (d) { return x(d.y0); }
                }).style("fill", 'grey');
        };
        static instance(): ng.IDirectiveFactory {
            const factory: ng.IDirectiveFactory = (): ng.IDirective => {
                return new StackedBarChart();
            };
            return factory;
        }
    }
    angular.module('app.charts').directive('iqStackedBarChart', StackedBarChart.instance());
}