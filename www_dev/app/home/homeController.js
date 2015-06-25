angular.module('homeApp')

.controller('HomeController',
		[ '$rootScope', '$scope', function($rootScope, $scope) {
			console.log($rootScope.entriesList);
			$scope.entriesList = $rootScope.entriesList;
		} ])