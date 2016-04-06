///<reference path="../../../typings/_reference.ts"/>

module app.headstones {
    'use strict';

    // interface ILoginModalController {
    // 	signUp(): void;
    // 	cancel(): void;
    // }

    class HeadstonesModalController {

        private headstonesBasedOnIndex: any[];

        static $inject = [
            '$uibModalInstance',
            'headstones',
            'index'
        ];
        constructor(
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            public headstones: any[],
            public index: number) {
                console.log(this.headstones);
                
            this.init();
        }

        cancel(): void {
            this.$uibModalInstance.dismiss('cancel');
        }
        
        // -----------------------------------------------
            
        private init(): void {
            this.headstonesBasedOnIndex = [];
            this.createHeadstonesBasedOnIndex();
        }

        private createHeadstonesBasedOnIndex(): void {
            var i: number = 0;
            while(i <= this.headstones.length - 1) {
                this.headstonesBasedOnIndex.push(this.headstones[this.index]);
                if(this.index === this.headstones.length - 1) {
                    this.index = -1;
                }
                this.index++;
                i++;
            }
            console.log(this.headstonesBasedOnIndex);
        }


    }
    angular.module('app.headstones').controller('app.headstones.HeadstonesModalController', HeadstonesModalController);
}