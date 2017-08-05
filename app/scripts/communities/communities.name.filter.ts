///<reference path="../../../typings/_reference.ts"/>

module app.communities {
	'use strict';
	
	export class NameFilter {
		public static Factory() {
			return(names: any[], letter: string): any => {
				if(!letter) {
					return names;
				}
				let filteredNames = names;
				filteredNames = names.filter(name => {
					return name.nm.charAt(0).toUpperCase() === letter.toUpperCase();
				});
				return filteredNames;
			}
		}
	}
	angular.module('app.communities').filter('names', [NameFilter.Factory]);
}