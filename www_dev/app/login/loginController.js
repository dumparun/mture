angular.module('loginApp')

.controller(
		'LoginController',
		[
				'$scope',
				'$rootScope',
				'$state',
				'LoginService',
				function($scope, $rootScope, $state, LoginService) {

					$scope.data = {};

					$scope.signIn = function(form) {
						console.log(form);
						console.log('Signing In');
						if (form.$invalid) {
							return;
						}

						console.log($scope.data.loginID + '  '
								+ $scope.data.password);
						var postData = {
							"loginID" : $scope.data.loginID,
							"password" : $scope.data.password
						};

						LoginService.login(postData).then(function(response) {
							$rootScope.entriesList = response.data.entriesList;
							console.log($rootScope.entriesList);
							$state.go('home');
						});
					};
				} ]);