angular.module('loginApp')

.factory('LoginService', ['$http', '$ionicLoading', 'CommsService', function($http, $ionicLoading, CommsService) {
	return {
		login : function(postData) {
			return new CommsService.communicate(postData);
		},
	}
}]);