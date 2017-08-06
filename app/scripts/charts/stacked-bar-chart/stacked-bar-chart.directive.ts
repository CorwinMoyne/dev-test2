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
            let colours = ['#1d8074', '#e0e76f', '#e0e2e0'];
            let types = ['sharedProficient', 'sharedNeedsmore', 'needs'];
            let layers = d3.layout.stack()(types.map((type) => {
                return data.map((d, i) => {
                    return { x: i, y: d[type] };
                });
            }));
            let margin = { top: 40, right: 10, bottom: 20, left: 50 };
            let yGroupMax = d3.max(layers, (layer) => { return d3.max(layer, (d) => { return d.y; }); })
            let yStackMax = d3.max(layers, (layer) => { return d3.max(layer, (d) => { return d.y0 + d.y; }); });
            let labels = data.map((d) => { return d.jobFamily; });

            draw();
            // d3.select(window).on('resize', draw);

            function draw(): void {
                let width = (screen.width / 4) - margin.left - margin.right;
                let height = 533 - margin.top - margin.bottom;

                let yScale = d3.scale.ordinal()
                    .domain(d3.range(data.length))
                    .rangeRoundBands([1, height], .7);

                let xScale = d3.scale.linear()
                    .domain([0, yStackMax])
                    .range([0, width / 2]);

                let svg = d3.select(element[0])
                    .append('svg')
                    .attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)

                let layer = svg.selectAll('.layer')
                    .data(layers)
                    .enter()
                    .append('g')
                    .attr('class', 'layer')
                    .style('fill', (d, i) => { return colours[i]; });

                layer.selectAll('rect')
                    .data((d) => { return d; })
                    .enter()
                    .append('rect')
                    .attr({
                        'y': (d) => {
                            return yScale(d.x);
                        },
                        'x': (d) => {
                            return xScale(d.y0);
                        },
                        'height': yScale.rangeBand(),
                        'width': (d) => {
                            return xScale(d.y);
                        }
                    });

                layer.selectAll('text')
                    .data(layers[0])
                    .enter()
                    .append('text')
                    .text((d, i) => {
                        return labels[i];
                    })
                    .attr({
                        'text-anchor': 'start',
                        'y': (d, i) => {
                            return yScale(d.x) - 10;
                        },
                        'x': (d) => { return xScale(d.y0); }
                    }).style('fill', 'grey');
            }
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