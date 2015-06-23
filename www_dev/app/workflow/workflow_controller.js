angular
		.module('workflowApp.controller', [ 'workflowApp.service' ])


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
						function($scope, $rootScope, $state, $cordovaCapture,
								FileService, PingService, LocationService) {

							$scope.captureImage = function() {
								var options = {
									limit : 1
								};

								$cordovaCapture
										.captureImage(options)
										.then(
												function(imageData) {
													console.log(imageData);
													FileService
															.readFile(
																	imageData[0].localURL)
															.then(
																	function(
																			response) {
																		console
																				.log("Response came here");
																		console
																				.log(response);
																		$rootScope.imagebase64 = response;
																		$state
																				.go('showImage');
																	});
												}, function(err) {
													console.log(err);
												});
							};

							$scope.ping = function() {

								var postData = {};

								PingService
										.ping(postData)
										.then(
												function(response) {
													$scope.entriesList = $rootScope.entriesList;
													$state.go('home');
												});
							};

							$scope.captureLocation = function() {
								LocationService
										.updateLocation()
										.then(
												function(response) {
													$scope.entriesList = $rootScope.entriesList;
													$state.go('home');
												});
							};

						} ])

		.controller(
				'ImageController',
				[
						'$rootScope',
						'$scope',
						'$state',
						'UploadService',
						function($rootScope, $scope, $state, UploadService) {
							console.log($rootScope.imagebase64);
							$scope.uploadImage = function(form) {
								console.log('Uploading Image');

								var postData = {
									"data" : $scope.imagebase64,
									"comments" : $scope.imageComments,
									"type" : "image"
								};

								UploadService
										.uploadData(postData)
										.then(
												function(response) {
													console.log(response);
													$scope.entriesList = $rootScope.entriesList;
													$state.go('home');
												});
							};
						} ])