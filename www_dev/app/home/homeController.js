angular.module('homeApp')

.controller('HomeController', [
        '$scope', 'HomeDataService', function($scope, HomeDataService) {

	        $scope.entriesList = HomeDataService.getEntryList();
        }
])