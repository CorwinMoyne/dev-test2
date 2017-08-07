/// <reference path='../../../../typings/_reference.ts' />
module app.charts {
    'use strict';

    class PathChart implements ng.IDirective {
        restrict: string = 'E';
        scope: any = {
            data: '=',
            allJobs: '=',
            selector: '='
        };
        link: ng.IDirectiveLinkFn = (scope: ng.IScope, element: any) => {
            let data = scope['data'];
            let allJobs = scope['allJobs'];
            let selector = '#' + scope['selector'];
            let colours = ['#1d8074', '#e0e76f', '#e0e2e0'];
            let imagePath = '../../../images/profile-circle.png';

            draw();
            updateOnResize();
            function draw(): void {
                let svg = d3.select(element[0]).append('svg');
                let margin = { top: 10, right: 10, bottom: 10, left: 10 };
                let width = parseInt(d3.select(selector).style('width'), 10) - margin.left - margin.right;
                let height = 533 - margin.top - margin.bottom;
                let userId = data[0].user.id;
                let name;
                let jobName;

                svg.attr('width', width + margin.left + margin.right)
                    .attr('height', height + margin.top + margin.bottom)
                    .attr('class', 'title')
                    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')
                    .append('g')
                    .attr('id', 'image')

                svg.select('#image')
                    .append("svg:image")
                    .attr('x', 130)
                    .attr('y', 0)
                    .attr('width', 64)
                    .attr('height', 64)
                    .attr("xlink:href", imagePath);

                allJobs.find((job) => {
                    if (job.author.id === userId) {
                        name = job.author.firstName + ' ' + job.author.lastName;
                        jobName = job.jobFamily.jobFamily;
                    }
                });

                svg.select('#image')
                    .append('text')
                    .text(name)
                    .attr('x', 120)
                    .attr('y', 80)
                    .style('color', 'black')
                    .style('font-weight', 'bold');

                svg.select('#image')
                    .append('text')
                    .text(jobName)
                    .attr('x', 100)
                    .attr('y', 100)
                    .style('color', 'black');

                svg.append('g')
                    .append("line")
                    .attr("x1", 0)
                    .attr("y1", 35)
                    .attr("x2", 130)
                    .attr("y2", 35)
                    .attr('stroke', colours[2])
                    .attr('stroke-width', 2);

                let y1Vertical = 35;
                let y2Vertical = 150;
                let y1Diagonal = 150;
                let y2Diagonal = 265;
                let targetY = 250;
                data.forEach((d) => {

                    svg.append('g')
                        .append('line')
                        .attr("x1", 0)
                        .attr("y1", y1Vertical)
                        .attr("x2", 0)
                        .attr("y2", y2Vertical)
                        .attr('stroke', colours[2])
                        .attr('stroke-width', 3);
                    y1Vertical += 115;
                    y2Vertical += 145;

                    svg.append('g')
                        .append('line')
                        .attr("x1", 0)
                        .attr("y1", y1Diagonal)
                        .attr("x2", 150)
                        .attr("y2", y2Diagonal)
                        .attr('stroke', colours[2])
                        .attr('stroke-width', 2);
                    y1Diagonal += 145;
                    y2Diagonal += 145;

                    if (d.steps.length > 1) {
                        d.steps.sort((a, b) => {
                            return a.seq - b.seq;
                        });
                    }
                    d.steps.forEach((step, index) => {
                        if (index === d.steps.length - 1) {
                            svg.append('g')
                                .attr('id', 'target' + index)
                                .append("svg:image")
                                .attr('x', 140)
                                .attr('y', targetY)
                                .attr('width', 48)
                                .attr('height', 48)
                                .attr("xlink:href", '../../../images/target.png');

                            let jobId = step.jobPayGrade.job.id;
                            let jobName;
                            allJobs.find((job) => {
                                if (job.id === jobId) {
                                    jobName = job.name;
                                }
                            });
                            svg.select('#target' + index)
                                .append('text')
                                .text(jobName + ' (' + step.jobPayGrade.payGrade.code + ')')
                                .attr('x', 130)
                                .attr('y', targetY + 60);
                            targetY += 145;
                        } else {
                            svg.append('g')
                                .attr('id', 'step' + index)
                                .append("circle")
                                .attr("cx", 30)
                                .attr("cy", 172)
                                .attr("r", 10)
                                .style('fill', colours[2]);

                            let jobId = step.jobPayGrade.job.id;
                            let jobName;
                            allJobs.find((job) => {
                                if (job.id === jobId) {
                                    jobName = job.name;
                                }
                            });
                            svg.select('#step' + index)
                                .append('text')
                                .text(jobName + ' (' + step.jobPayGrade.payGrade.code + ')')
                                .attr('x', 45)
                                .attr('y', 170);
                        }
                    });
                });
            }

            function updateOnResize(): void {
                angular.element(window).bind('resize', () => {
                    d3.select(selector + ' svg').remove();
                    draw();
                });
            }
        };
        static instance(): ng.IDirectiveFactory {
            const factory: ng.IDirectiveFactory = (): ng.IDirective => {
                return new PathChart();
            };
            return factory;
        }
    }
    angular.module('app.charts').directive('iqPathChart', PathChart.instance());
}