angular.module('startup.services', [])

.factory('LoginService', function($http, $ionicLoading) {
	return {
		login : function(postData) {
			
			 $ionicLoading.show({
			      template: 'Loading...'
			    });
			return $http({
				url : 'http://www.dumparun.info/dev/mture/index.php/V1/Mture/login',
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
})


.factory('UploadService', function($http, $ionicLoading) {
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
})

.service('FileService', function($q, $ionicLoading) {

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
})