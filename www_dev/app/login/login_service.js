angular.module('loginApp.service', [])

.factory('LoginService', ['$http', '$ionicLoading', function($http, $ionicLoading) {
	return {
		login : function(postData) {
			
			 $ionicLoading.show({
			      template: 'Loading...'
			    });
			return $http({
				url : 'http://www.dumparun.info/dev/mture/index.php/V1/Mture/login',
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