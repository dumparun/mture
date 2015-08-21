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
angular.module('workflowApp')

.controller(
        'WorkflowController',
        [
                '$scope',
                '$state',
                '$ionicHistory',
                '$cordovaCapture',
                '$translate',
                'FileService',
                'PingService',
                'LocationService',
                'CommonDataService',
                'ImageDataService',
                'HomeDataService',
                function($scope, $state, $ionicHistory, $cordovaCapture, $translate, FileService,
                        PingService, LocationService, CommonDataService, ImageDataService,
                        HomeDataService) {

	                $scope.languageKey = 'en_US';
	                
	                if (CommonDataService.getStatus().getStatusCode() != 0) {
		                $scope.alert = {};
		                $scope.alert.type = "error";
		                $scope.alert.message = CommonDataService.getStatus().getStatusMessage();
		                CommonDataService.getStatus().setStatusCode(0);
	                }
	                
	                $scope.captureImage = function() {

		                var options = {
			                limit : 1
		                };
		                
		                $cordovaCapture.captureImage(options).then(function(imageData) {

			                console.log(imageData);
			                FileService.readFile(imageData[0].localURL).then(function(response) {

				                console.log("Response came here");
				                console.log(response);
				                ImageDataService.setImageBase64(response);
				                $state.go('showImage');
			                });
		                }, function(err) {

			                console.log(err);
		                });
	                };
	                
	                $scope.ping = function() {

		                PingService.ping().then(function() {

			                if (CommonDataService.getStatus().getStatusCode() == 0) {
				                HomeDataService.getStatus().setStatusCode(0)

				                HomeDataService.getStatus().setStatusMessage("Successfull");
				                $state.go('home');
			                }
		                });
	                };
	                
	                $scope.captureLocation = function() {

		                LocationService.updateLocation().then(
		                        function(response) {

			                        if (CommonDataService.getStatus().getStatusCode() == 0) {
				                        HomeDataService.getStatus().setStatusCode(0)

				                        HomeDataService.getStatus().setStatusMessage(
				                                "Location Updated Succesfully");
				                        $state.go('home');
			                        }
		                        });
	                };
	                
	                $scope.errorResponse = function() {

		                PingService.pingForError().then(function() {

			                if (CommonDataService.getStatus().getStatusCode() == 0) {
				                $state.go('home');
			                }
			                else {
				                $state.go($state.current.name, {}, {
					                reload : true
				                });
			                }
		                });
	                };
	                
	                $scope.httpErrorResponse = function() {

		                PingService.pingForHTTPError().then(function() {

			                if (CommonDataService.getStatus().getStatusCode() == 0) {
				                $state.go('home');
			                }
			                else {
				                $state.go($state.current.name, {}, {
					                reload : true
				                });
			                }
		                });
	                };
	                
	                $scope.changeLanguage = function() {

		                $scope.languageKey = angular.equals($scope.languageKey, 'en_US')
		                        ? 'ml_ML'
		                        : 'en_US';
		                
		                $translate.use($scope.languageKey);
		                
	                };
	                
                }
        ]);