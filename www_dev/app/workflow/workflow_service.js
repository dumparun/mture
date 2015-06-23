angular.module('workflowApp.service', [])

.factory('PingService', ['$http', '$ionicLoading', function($http, $ionicLoading) {
	return {
		ping : function(postData) {
			
			 $ionicLoading.show({
			      template: 'Pinging...'
			    });
			return $http({
				url : 'http://www.dumparun.info/dev/mture/index.php/V1/Mture/ping',
				method : "POST",
				data : postData,
				headers : {
					'Content-Type' : 'application/json'
				}
			}).success(function(data, status, headers, config) {
				console.log(data);
			}).error(function(data, status, headers, config) {
				console.log(status);
				 
			}).finally(function(){
				$ionicLoading.hide();
			});
		},
	}
}])

.factory('LocationService', ['$http', '$ionicLoading', '$cordovaGeolocation', '$q', function($http, $ionicLoading, $cordovaGeolocation, $q) {
	return {
		updateLocation : function() {
			
			 var deferred = $q.defer();
			 
			 $ionicLoading.show({
			      template: 'Updating Location...'
			    });
			 
			var posOptions = {
					timeout : 10000,
					enableHighAccuracy : false
				};
			
				$cordovaGeolocation
						.getCurrentPosition(posOptions)
						.then(
								function(position) {

									var postData = {
										"latitude" : position.coords.latitude,
										"longitude" : position.coords.longitude
									};

									$http({
										url : 'http://www.dumparun.info/dev/mture/index.php/V1/Mture/location',
										method : "POST",
										data : postData,
										headers : {
											'Content-Type' : 'application/json'
										}
									}).success(function(data, status, headers, config) {
										console.log(data);
										 deferred.resolve(data);
									}).error(function(data, status, headers, config) {
										console.log(status);
										 deferred.resolve(status);
										 
									}).finally(function(){
										$ionicLoading.hide();
									});

								}, function(err) {
									console.log(err);
									$ionicLoading.hide();
									 deferred.resolve(err);
								});
				
				 return deferred.promise;
		},
	}
}])


.factory('UploadService', ['$http', '$ionicLoading',  function($http, $ionicLoading) {
	return {
		uploadData : function(postData) {
			
			 $ionicLoading.show({
			      template: 'Uploading...'
			    });
			return $http({
				url : 'http://www.dumparun.info/dev/mture/index.php/V1/Mture/upload',
				method : "POST",
				data : postData,
				headers : {
					'Content-Type' : 'application/json'
				}
			}).success(function(data, status, headers, config) {
				console.log(data);
			}).error(function(data, status, headers, config) {
				console.log(status);
				 
			}).finally(function(){
				$ionicLoading.hide();
			});
		},
	}
}])

.service('FileService', ['$q', '$ionicLoading', function($q, $ionicLoading) {

	return{
	readFile : function (imageURI) {
		
		 $ionicLoading.show({
		      template: 'Processing Image...'
		    });
		 
		 var deferred = $q.defer();
				             
		 var gotFileEntry = function(fileEntry) { 
			 
			 console.log("got image file entry: " + fileEntry.fullPath); 
			 
			 fileEntry.file( function(file) {
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
	    window.resolveLocalFileSystemURL(imageURI, gotFileEntry, 
	    		fsFail);
	    
	    return deferred.promise;
	},
	}
}])