angular.module('startup.controllers', [ 'startup.services' ])

.controller('LoginController',
		function($scope, $rootScope, $state, LoginService) {

			$scope.data = {};

			$scope.signIn = function(form) {
				console.log(form);
				console.log('Signing In');
				if (form.$invalid) {
					return;
				}

				console.log($scope.data.loginID + '  ' + $scope.data.password);
				LoginService.login().then(function(response) {
					$rootScope.studentsList = response.data.studentsList;
					console.log($rootScope.studentsList);
					$state.go('home');
				});
			};
		})

.controller('HomeController', function($rootScope, $scope, $stateParams) {
	console.log($rootScope.studentsList);
	$scope.studentsList = $rootScope.studentsList;
})

.controller('ActionsController', function($scope, $state) {
});