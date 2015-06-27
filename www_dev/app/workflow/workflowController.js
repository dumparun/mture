angular.module('workflowApp')

.controller(
        'WorkflowController',
        [
                '$scope',
                '$rootScope',
                '$state',
                '$cordovaCapture',
                'FileService',
                'PingService',
                'LocationService',
                'CommonDataService',
                function($scope, $rootScope, $state, $cordovaCapture, FileService, PingService,
                        LocationService, CommonDataService) {

	                $scope.captureImage = function() {

		                var options = {
			                limit : 1
		                };
		                
		                $cordovaCapture.captureImage(options).then(function(imageData) {

			                console.log(imageData);
			                FileService.readFile(imageData[0].localURL).then(function(response) {

				                console.log("Response came here");
				                console.log(response);
				                $rootScope.imagebase64 = response;
				                $state.go('showImage');
			                });
		                }, function(err) {

			                console.log(err);
		                });
	                };
	                
	                $scope.ping = function() {

		                PingService.ping().then(function() {

			                if (CommonDataService.getStatus().getStatusCode() == 0) {
				                $state.go('home');
			                }
		                });
	                };
	                
	                $scope.captureLocation = function() {

		                LocationService.updateLocation().then(function(response) {

			                if (CommonDataService.getStatus().getStatusCode() == 0) {
				                $state.go('home');
			                }
		                });
	                };
	                
                }
        ])

.controller(
        'ImageController',
        [
                '$scope', '$state', 'UploadService', 'CommonDataService', 'ImageDataService',
                function($scope, $state, UploadService, CommonDataService, ImageDataService) {

	                $scope.imagebase64 = ImageDataService.getImageBase64();
	                
	                $scope.uploadImage = function(form) {

		                ImageDataService.setImageComments($scope.imageComments);
		                UploadService.uploadData(postData).then(function(response) {

			                if (CommonDataService.getStatus().getStatusCode() == 0) {
				                $state.go('home');
			                }
		                });
	                };
                }
        ])