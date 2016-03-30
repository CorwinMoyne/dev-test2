/// <reference path="../../../typings/_reference.ts" />

module app.home {
    'use strict';

    class HomeController {

        static $inject = [
            'images'
        ];
        constructor(
            public images) { }
    }
    angular.module('app.home').controller('app.home.HomeController', HomeController);
}