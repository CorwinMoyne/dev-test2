/// <reference path='../../../../typings/_reference.ts' />
declare let d3: any;
module app.charts {
    'use strict';

    class StackedBarChart implements ng.IDirective {
        restrict: string = 'E';
        scope: any = {
            data: '=',
            labelKey: '=',
            marginLeft: '=',
            selector: '=',
            title: '=',
            showAxis: '=?'
        };
        link: ng.IDirectiveLinkFn = (scope: ng.IScope, element: any) => {
            let data = scope['data'];
            let labelKey = scope['labelKey'];
            let marginLeft = parseInt(scope['marginLeft']);
            let title = scope['title'];
            let selector = '#' + scope['selector'];
            let showAxis = scope['showAxis'];
            let colours = ['#1d8074', '#e0e76f', '#e0e2e0'];
            let types = ['sharedProficient', 'sharedNeedsmore', 'needs'];
            let layers = d3.layout.stack()(types.map((type) => {
                return data.map((d, i) => {
                    return { x: i, y: d[type] };
                });
            }));
            let margin = { top: 80, right: 10, bottom: 20 };
            let yGroupMax = d3.max(layers, (layer) => { return d3.max(layer, (d) => { return d.y; }); })
            let yStackMax = d3.max(layers, (layer) => { return d3.max(layer, (d) => { return d.y0 + d.y; }); });
            let labels = data.map((d) => {
                let key = d[labelKey];
                if (!!d['jobPayGrade']) {
                    key += ' ' + d['jobPayGrade'];
                }
                return key;
            });

            draw();

            function draw(): void {
                let margin = { top: 10, right: 10, bottom: 10, left: 200 };
                let width = parseInt(d3.select(selector).style('width'), 10) - marginLeft - margin.right;
                let height = 533 - margin.top - margin.bottom;

                let yScale = d3.scale.ordinal()
                    .domain(d3.range(data.length))
                    .rangeRoundBands([1, height], .7);

                let xScale = d3.scale.linear()
                    .domain([0, yStackMax])
                    .range([0, width]);

                var xAxis = d3.svg.axis().scale(xScale).orient("bottom");

                let svg = d3.select(element[0])
                    .append('svg')
                    .attr('width', width + marginLeft + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .attr('class', 'title')
                    .attr("transform", "translate(" + marginLeft + "," + margin.top + ")");

                if (!!title) {
                    svg.selectAll('.title')
                        .data(title)
                        .enter()
                        .append('text')
                        .text(title)
                        .attr({
                            'text-anchor': 'start',
                            'y': 10,
                            'x': 0
                        })
                        .style('fill', 'grey')
                        .style('font-weight', 'bold');
                }

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

                // layer.selectAll('text')
                //     .data(layers[0])
                //     .enter()
                //     .append('text')
                //     .text((d, i) => {
                //         return labels[i];
                //     })
                //     .attr({
                //         'text-anchor': 'start',
                //         'y': (d, i) => {
                //             return yScale(d.x) - 10;
                //         },
                //         'x': (d) => { return xScale(d.y0); }
                //     }).style('fill', 'grey');

                if (!!showAxis) {
                    svg.insert("g", ":first-child")
                        .attr("class", "axis-horizontal")
                        .attr("transform", "translate(" + (3) + "," + (height - margin.bottom) + ")")
                        .call(xAxis);
                }

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
                        'x': 0
                    }).style('fill', 'grey');

                // bars.append("rect")
                //     .attr("class", "bar")
                //     .attr("y", function (d) {
                //         return y(d.name);
                //     })
                //     .attr("height", y.rangeBand())
                //     .attr("x", 0)
                //     .attr("width", function (d) {
                //         return x(d.value);
                //     });



                // bar.append("text")
                //     .attr("x", x.rangeBand() / 2)
                //     .attr("y", function (d) { return y(d.value) + 3; })
                //     .attr("dy", ".75em")
                //     .text(function (d) { return d.value; });

                // layer.append('text')
                //     .attr("x", function (d, i) {
                //         return d;
                //     })
                //     .attr("y", function (d, i) { return y(labels[i]); })
                //     // .attr("dy", ".75em")
                //     .text(function (d, i) { return labels[i]; });
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