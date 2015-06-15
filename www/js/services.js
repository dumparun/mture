angular.module('startup.services', [])

.factory('LoginService', function($http, $ionicLoading) {
	return {
		login : function() {
			var postData = {

			};
			 $ionicLoading.show({
			      template: 'Loading...'
			    });
			return $http({
				url : 'http://www.dumparun.info/dev/mture/index.php/V1/Auth/login',
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
})