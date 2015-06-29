angular
        .module('workflowApp')
        
        .controller(
                'ImageController',
                [
                        '$scope',
                        '$state',
                        'UploadService',
                        'CommonDataService',
                        'ImageDataService',
                        function($scope, $state, UploadService, CommonDataService, ImageDataService) {

	                        if (CommonDataService.getStatus().getStatusCode() != 0) {
		                        $scope.alert = {};
		                        $scope.alert.type = "error";
		                        $scope.alert.message = CommonDataService.getStatus()
		                                .getStatusMessage();
		                        CommonDataService.getStatus().setStatusCode(0);
	                        }
	                        
	                        $scope.imagebase64 = ImageDataService.getImageBase64();
	                        
	                        $scope.uploadImage = function(form) {

		                        ImageDataService.setImageComments($scope.imageComments);
		                        UploadService
		                                .uploadData()
		                                .then(
		                                        function(response) {

			                                        if (CommonDataService.getStatus()
			                                                .getStatusCode() == 0) {
				                                        $scope.alert = {};
				                                        $scope.alert.type = "success";
				                                        $scope.alert.message = "Your Photo has been uploaded succesfully!!!";
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