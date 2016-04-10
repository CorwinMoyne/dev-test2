///<reference path="../../../typings/_reference.ts"/>

module app.headstones {
    'use strict';
    
    class HeadstonesModalController {

        static $inject = [
            '$uibModalInstance',
            'headstones',
            'index'
        ];
        constructor(
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            public headstones: any[],
            public index: number) {
        }

        cancel(): void {
            this.$uibModalInstance.dismiss('cancel');
        }
    }
    angular.module('app.headstones').controller('app.headstones.HeadstonesModalController', HeadstonesModalController);
}