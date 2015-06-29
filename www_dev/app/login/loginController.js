angular.module('loginApp')

.controller(
        'LoginController',
        [
                '$scope',
                '$rootScope',
                '$state',
                'LoginService',
                'HomeDataService',
                function($scope, $rootScope, $state, LoginService, HomeDataService) {

	                $scope.data = {};
	                
	                if (HomeDataService.getStatus().getStatusCode() != 0) {
		                $scope.alert = {};
		                $scope.alert.type = "error";
		                $scope.alert.message = HomeDataService.getStatus().getStatusMessage();
		                HomeDataService.getStatus().setStatusCode(0);
	                }
	                
	                $scope.signIn = function(form) {

		                console.log('Signing In');
		                if (form.$invalid) {
			                return;
		                }
		                
		                LoginService.login($scope.data.loginID, $scope.data.password).then(
		                        function() {

			                        if (HomeDataService.getStatus().getStatusCode() == 0) {
				                        $state.go('home');
			                        }
			                        else {
				                        $state.go($state.current.name, {}, {
					                        reload : true
				                        });
			                        }
		                        });
	                };
                }
        ]);