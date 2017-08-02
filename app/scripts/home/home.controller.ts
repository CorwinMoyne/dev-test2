/// <reference path="../../../typings/_reference.ts" />

module app.home {
    'use strict';

    export class HomeController {

        static $inject = [];
        constructor() { }
    }
    angular.module('app.home').controller('app.home.HomeController', HomeController);
}