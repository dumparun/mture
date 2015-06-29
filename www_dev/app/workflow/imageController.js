angular.module('workflowApp')

.controller(
        'ImageController',
        [
                '$scope',
                '$state',
                'UploadService',
                'CommonDataService',
                'ImageDataService',
                'HomeDataService',
                function($scope, $state, UploadService, CommonDataService, ImageDataService,
                        HomeDataService) {

	                if (CommonDataService.getStatus().getStatusCode() != 0) {
		                $scope.alert = {};
		                $scope.alert.type = "error";
		                $scope.alert.message = CommonDataService.getStatus().getStatusMessage();
		                CommonDataService.getStatus().setStatusCode(0);
	                }
	                
	                $scope.imagebase64 = ImageDataService.getImageBase64();
	                
	                $scope.uploadImage = function(form) {

		                ImageDataService.setImageComments($scope.imageComments);
		                UploadService.uploadData().then(
		                        function(response) {

			                        if (CommonDataService.getStatus().getStatusCode() == 0) {
				                        
				                        HomeDataService.getStatus().setStatusCode(0)

				                        HomeDataService.getStatus().setStatusMessage(
				                                "Your Photo has been uploaded succesfully!!!");
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
        ])