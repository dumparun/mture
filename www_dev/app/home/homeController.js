/*
 *	"THE BEER-WARE LICENSE" (Revision 42): 
 *	arun@dumparun.info wrote this file. 
 * 	As long as you retain this notice you can do whatever you want with this stuff. 
 * 	If we meet some day, and you think this stuff is worth it, you can buy me a beer in return. 
 * 	arun@dumparun.info
 *
 *   http://en.wikipedia.org/wiki/Beerware
 *
 */

angular.module('homeApp')

.controller(
		'HomeController',
		[
				'$scope',
				'HomeDataService',
				function($scope, HomeDataService) {

					if (HomeDataService.getStatus().getStatusCode() == 0) {
						$scope.alert = {};
						$scope.alert.type = "success";
						$scope.alert.message = HomeDataService.getStatus()
								.getStatusMessage();
					}
					$scope.entriesList = HomeDataService.getEntryList();
				} ])