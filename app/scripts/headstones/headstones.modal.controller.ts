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
            this.init();
        }

        cancel(): void {
            this.setAllHeadstonesInactive();
            this.$uibModalInstance.dismiss('cancel');
        }
        
        // -----------------------------------------------
        
        private init(): void {
            this.headstones[this.index].active = true;
        }

        private setAllHeadstonesInactive(): void {
            for (var i: number = 0; i < this.headstones.length; i++) {
                this.headstones[i].active = false;
            }
        }
    }
    angular.module('app.headstones').controller('app.headstones.HeadstonesModalController', HeadstonesModalController);
}