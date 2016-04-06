/// <reference path="../../../typings/_reference.ts" />

module app.contact {
    'use strict';

    class ContactController {

        map: any;
        marker: any;
        title: any;
        infowindow: any;
        showInfoWindow: any;
        p: any;

        constructor() {
            this.init();
        }

        init(): void {
            this.map = {
                center: [54.93932119863472, -7.782586960400408],
            };

            this.marker =
                {
                    position: { latitude: 54.93932119863472, longitude: -7.782586960400408 },
                    title: 'John Daly and Sons Memorials',
                };

            this.p = this.marker.title;
            this.showInfoWindow = function(event, p) {

                var infoWindow = new google.maps.InfoWindow();
                infoWindow.setContent(p);
                infoWindow.setPosition(this.map.center);
                infoWindow.open(this.map, this.marker);
            }
        }
    }
    angular.module('app.contact').controller('app.contact.ContactController', ContactController);
}