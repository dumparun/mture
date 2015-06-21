angular.module('startup.controllers', [ 'startup.services' ])

.controller('LoginController',
		function($scope, $rootScope, $state, LoginService) {

			$scope.data = {};

			$scope.signIn = function(form) {
				console.log(form);
				console.log('Signing In');
				if (form.$invalid) {
					return;
				}

				console.log($scope.data.loginID + '  ' + $scope.data.password);
				var postData = {
					"loginID" : $scope.data.loginID,
					"password" : $scope.data.password
				};

				LoginService.login(postData).then(function(response) {
					$rootScope.studentsList = response.data.studentsList;
					console.log($rootScope.studentsList);
					$state.go('home');
				});
			};
		})

.controller('HomeController', function($rootScope, $scope, $stateParams) {
	console.log($rootScope.studentsList);
	$scope.studentsList = $rootScope.studentsList;
})

.controller(
		'ActionsController',
		function($scope, $rootScope, $state, $cordovaCapture, FileService) {
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
										$rootScope.imagebase64 = response;
										$state.go('showImage');
									});
						}, function(err) {
							console.log(err);
						});
			}

		})

.controller('ImageController',
		function($rootScope, $scope, $state, UploadService) {
			console.log($rootScope.imagebase64);
			$scope.uploadImage = function(form) {
				console.log('Uploading Image');

				var postData = {
					"data" : $scope.imagebase64,
					"comments" : $scope.imageComments,
					"type" : "image"
				};

				UploadService.uploadData(postData).then(function(response) {
					console.log(response);
					console.log($rootScope.studentsList);
					$scope.studentsList = $rootScope.studentsList;
					$state.go('home');
				});
			};
		})