angular
		.module('mture.controllers', [ 'mture.services' ])

		.controller(
				'LoginController',
				[
						'$scope',
						'$rootScope',
						'$state',
						'LoginService',
						function($scope, $rootScope, $state, LoginService) {

							$scope.data = {};

							$scope.signIn = function(form) {
								console.log(form);
								console.log('Signing In');
								if (form.$invalid) {
									return;
								}

								console.log($scope.data.loginID + '  '
										+ $scope.data.password);
								var postData = {
									"loginID" : $scope.data.loginID,
									"password" : $scope.data.password
								};

								LoginService
										.login(postData)
										.then(
												function(response) {
													$rootScope.entriesList = response.data.entriesList;
													console
															.log($rootScope.entriesList);
													$state.go('home');
												});
							};
						} ])

		.controller('HomeController',
				[ '$rootScope', '$scope', function($rootScope, $scope) {
					console.log($rootScope.entriesList);
					$scope.entriesList = $rootScope.entriesList;
				} ])

		.controller(
				'ActionsController',
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