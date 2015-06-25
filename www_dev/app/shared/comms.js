angular.module('comms')

.factory('CommsService', ['$http', '$ionicLoading', function($http, $ionicLoading) {
	return {
		communicate : function(postData) {
			
			 $ionicLoading.show({
			      template: 'Pinging...'
			    });
			return $http({
				url : 'http://www.dumparun.info/dev/mture/index.php/V1/Mture/ping',
				method : "POST",
				data : postData,
				headers : {
					'Content-Type' : 'application/json'
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
