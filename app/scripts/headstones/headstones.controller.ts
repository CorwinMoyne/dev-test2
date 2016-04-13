/// <reference path="../../../typings/_reference.ts" />

module app.headstones {
    'use strict';

    class HeadstonesController {

        static $inject = [
            '$uibModal',
            'headstones'
        ];
        constructor(
            private $uibModal: ng.ui.bootstrap.IModalService,
            public headstones: any[]) { }

        openModal(index: number): void {
            this.headstones[index].active = true;
            this.$uibModal.open({
                animation: true,
                templateUrl: 'scripts/headstones/headstones.modal.html',
                controller: 'app.headstones.HeadstonesModalController as vm',
                size: 'lg',
                resolve: {
                    headstones: () => {
                        return this.headstones;
                    },
                    index: () => {
                        return index;
                    }
                }
            });
        }
    }
    angular.module('app.headstones').controller('app.headstones.HeadstonesController', HeadstonesController);
}