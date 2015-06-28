angular.module('homeApp')

.controller('HomeController', [
        '$scope', 'HomeDataService', function($scope, HomeDataService) {

        	if(HomeDataService.getStatus().getStatusCode() == 0){
        		$scope.alert = {};
                $scope.alert.type = "success";
                $scope.alert.message = "Successful Login";
        	}
	        $scope.entriesList = HomeDataService.getEntryList();
        }
])