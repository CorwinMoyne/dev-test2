/// <reference path="../../../typings/_reference.ts" />

module app.headstones {
    'use strict';
    
    class HeadstonesController {
        
         static $inject = [
            'headstones'
        ];
        constructor(
            public headstones) {
            console.log('headstones', this.headstones);
        }
    }
    angular.module('app.headstones').controller('app.headstones.HeadstonesController', HeadstonesController);
}