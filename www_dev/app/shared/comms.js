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
angular.module('comms')

.factory('CommsService', ['$http', '$ionicLoading', function($http, $ionicLoading) {
	return {
		communicate : function(commsData) {
			
			console.log(commsData.config());
			 $ionicLoading.show({
			      template: commsData.config().loadingTemplate
			    });
			return $http({
				url : commsData.config().baseURL + commsData.config().urlPath,
				method : commsData.config().method,
				data : commsData.config().postData,
				headers : {
					'Content-Type' : commsData.config().contentType,
				}
			}).success(function(data, status, headers, config) {
				console.log(data);
			}).error(function(data, status, headers, config) {
				console.log(status);
				 
			}).finally(function(){
				$ionicLoading.hide();
			});
		},
	}
}]);