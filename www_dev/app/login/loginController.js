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
	                
	                $scope.signIn = function(form) {

		                console.log('Signing In');
		                if (form.$invalid) {
			                return;
		                }
		                
		                LoginService.login($scope.data.loginID, $scope.data.password).then(
		                        function() {

			                        console.log(HomeDataService.getStatus().getStatusCode());
			                        
			                        if (HomeDataService.getStatus().getStatusCode() == 0) {
				                        $state.go('home');
			                        }
			                        else {
				                        $state.go('login');
			                        }
		                        });
	                };
                }
        ]);