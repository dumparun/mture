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