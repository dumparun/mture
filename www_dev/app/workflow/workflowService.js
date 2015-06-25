angular.module('workflowApp')

.service('PingService', [
        'CommsService', function(CommsService) {

	        return {
		        ping : function(postData) {

			        return new CommsService.communicate(postData);
		        },
	        }
        }
])

.factory(
        'LocationService',
        [
                '$http',
                '$ionicLoading',
                '$cordovaGeolocation',
                '$q',
                'CommsService',
                function($http, $ionicLoading, $cordovaGeolocation, $q, CommsService) {

	                return {
		                updateLocation : function() {

			                var deferred = $q.defer();
			                
			                $ionicLoading.show({
				                template : 'Updating Location...'
			                });
			                
			                var posOptions = {
			                    timeout : 10000,
			                    enableHighAccuracy : false
			                };
			                
			                $cordovaGeolocation.getCurrentPosition(posOptions).then(
			                        function(position) {

				                        var postData = {
				                            "latitude" : position.coords.latitude,
				                            "longitude" : position.coords.longitude
				                        };
				                        $ionicLoading.hide();
				                        
				                        return new CommsService.communicate(postData)
				                                .then(function(response) {

					                                console.log(response);
					                                $ionicLoading.hide();
					                                deferred.resolve(response);
				                                });
				                        
			                        }, function(err) {

				                        console.log(err);
				                        $ionicLoading.hide();
				                        deferred.resolve(err);
			                        });
			                
			                return deferred.promise;
		                },
	                }
                }
        ])

.factory('UploadService', [
        '$http', '$ionicLoading', 'CommsService', function($http, $ionicLoading, CommsService) {

	        return {
		        uploadData : function(postData) {

			        return new CommsService.communicate(postData);
		        },
	        }
        }
])

.service('FileService', [
        '$q', '$ionicLoading', function($q, $ionicLoading) {

	        return {
		        readFile : function(imageURI) {

			        $ionicLoading.show({
				        template : 'Processing Image...'
			        });
			        
			        var deferred = $q.defer();
			        
			        var gotFileEntry = function(fileEntry) {

				        console.log("got image file entry: " + fileEntry.fullPath);
				        
				        fileEntry.file(function(file) {

					        var reader = new FileReader();
					        reader.onloadend = function(evt) {

						        console.log("Read complete!");
						        var image64 = evt.target.result;
						        console.log(image64);
						        $ionicLoading.hide();
						        deferred.resolve(image64);
					        };
					        reader.readAsDataURL(file);
				        }, fsFail);
				        
			        };
			        
			        function fsFail(evt) {

				        console.log(evt);
				        $ionicLoading.hide();
				        deferred.resolve(evt);
			        }
			        window.resolveLocalFileSystemURL(imageURI, gotFileEntry, fsFail);
			        
			        return deferred.promise;
		        },
	        }
        }
])