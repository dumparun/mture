angular
        .module('workflowApp')
        
        .controller(
                'WorkflowController',
                [
                        '$scope',
                        '$state',
                        '$ionicHistory',
                        '$cordovaCapture',
                        'FileService',
                        'PingService',
                        'LocationService',
                        'CommonDataService',
                        'ImageDataService',
                        'HomeDataService',
                        function($scope, $state, $ionicHistory, $cordovaCapture,
                                FileService, PingService, LocationService, CommonDataService,
                                ImageDataService, HomeDataService) {

	                        if (CommonDataService.getStatus().getStatusCode() != 0) {
		                        $scope.alert = {};
		                        $scope.alert.type = "error";
		                        $scope.alert.message = CommonDataService.getStatus()
		                                .getStatusMessage();
		                        CommonDataService.getStatus().setStatusCode(0);
	                        }
	                        
	                        $scope.captureImage = function() {

		                        var options = {
			                        limit : 1
		                        };
		                        
		                        $cordovaCapture.captureImage(options).then(
		                                function(imageData) {

			                                console.log(imageData);
			                                FileService.readFile(imageData[0].localURL).then(
			                                        function(response) {

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

		                        PingService.ping()
		                                .then(
		                                        function() {

			                                        if (CommonDataService.getStatus()
			                                                .getStatusCode() == 0) {
				                                        HomeDataService.getStatus()
				                                                .setStatusCode(0)

				                                        HomeDataService.getStatus()
				                                                .setStatusMessage("Successfull");
				                                        $state.go('home');
			                                        }
		                                        });
	                        };
	                        
	                        $scope.captureLocation = function() {

		                        LocationService.updateLocation()
		                                .then(
		                                        function(response) {

			                                        if (CommonDataService.getStatus()
			                                                .getStatusCode() == 0) {
				                                        HomeDataService.getStatus()
				                                                .setStatusCode(0)

				                                        HomeDataService.getStatus()
				                                                .setStatusMessage("Location Updated Succesfully");
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
	                        
                        }
                ])
        
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
				                                        $state.go('showImage?error');
			                                        }
		                                        });
	                        };
                        }
                ])