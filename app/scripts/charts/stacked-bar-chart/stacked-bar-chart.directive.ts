/// <reference path='../../../../typings/_reference.ts' />
declare var d3: any;
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
            let margin = { top: 10, right: 10, bottom: 10, left: 0 };
            let width = 400 - margin.left - margin.right;
            let height = 400 - margin.top - margin.bottom;
            let barHeight = 20;
            let padding = 2;
            let colours = ['#1d8074', 'e0e76f', 'e0e2e0'];
            let values = [];
            data.forEach(d => {
                values.push(d.needs);
                values.push(d.sharedNeedsmore);
                values.push(d.sharedProficient);
            });
            let types = ['sharedProficient', 'sharedNeedsmore', 'needs'];
            let z = d3.scale.ordinal().range(colours)
            var layers = d3.layout.stack()(types.map(function (type) {
                return data.map(function (d, i) {
                    return { x: i, y: d[type] };
                });
            }));
            let yGroupMax = d3.max(layers, function (layer) { return d3.max(layer, function (d) { return d.y; }); })
            let yStackMax = d3.max(layers, function (layer) { return d3.max(layer, function (d) { return d.y0 + d.y; }); });

            var y = d3.scale.ordinal()
                .domain(d3.range(data.length))
                .rangeRoundBands([2, height], .08);

            var x = d3.scale.linear()
                .domain([0, yStackMax])
                .range([0, width]);

            let svg = d3.select(element[0])
                .append('svg')
                .attr('width', width + margin.left + margin.right)
                .attr('height', height + margin.top + margin.bottom)
                .append('g')
                .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

            var layer = svg.selectAll(".layer")
                .data(layers)
                .enter().append("g")
                .attr("class", "layer")
                .style("fill", function (d, i) { return colours[i]; });

            layer.selectAll("rect")
                .data(function (d) { return d; })
                .enter().append("rect")
                .attr("y", function (d) { return y(d.x); })
                .attr("x", function (d) { return x(d.y0); })
                .attr("height", y.rangeBand())
                .attr("width", function (d) { return x(d.y); });

            var yAxis = d3.svg.axis()
                .scale(y)
                .tickSize(1)
                .tickPadding(6)
                .orient("left");

            svg.append("g")
                .attr("class", "y axis")
                .call(yAxis);

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