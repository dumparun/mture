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