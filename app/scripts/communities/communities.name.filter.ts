///<reference path="../../../typings/_reference.ts"/>

module app.communities {
	'use strict';
	
	export class NameFilter {
		public static Factory() {
			return(input: any[], letter: string): any => {
				if(!letter) {
					return input;
				}
				let filteredNames = input;
				filteredNames = input.filter(name => {
					return name.nm.charAt(0).toUpperCase() === letter.toUpperCase();
				});
				return filteredNames;
			}
		}
	}
	angular.module('app.communities').filter('names', [NameFilter.Factory]);
}