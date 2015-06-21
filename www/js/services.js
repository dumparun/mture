angular.module('startup.services', [])

.factory('LoginService', function($http, $ionicLoading) {
	return {
		login : function() {
			var postData = {

			};
			 $ionicLoading.show({
			      template: 'Loading...'
			    });
			return $http({
				url : 'http://www.dumparun.info/dev/mture/index.php/V1/Auth/login',
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

.service('UploadService', function($q) {

	return{
	uploadFile : function (imageURI) {
		
		 var deferred = $q.defer();
		 var imgFileName = imageURI.substr(imageURI.lastIndexOf('/')+1); 
		 var imgPath = "tmp/" + imgFileName; 
		 console.log(imgFileName); 
				             
		 var gotFileEntry = function(fileEntry) { 
			 
			 console.log("got image file entry: " + fileEntry.fullPath); 
			 
			 fileEntry.file( function(file) {
			        var reader = new FileReader();
			        reader.onloadend = function(evt) {
			            console.log("Read complete!");
			            var image64 = evt.target.result;
			            console.log(image64);
			            deferred.resolve(image64);
			        };
			        reader.readAsDataURL(file);
			    }, fsFail);
             
         }; 

	    function fsFail(evt) {
	        console.log(evt);
	        deferred.resolve(evt);
	    }
	    window.resolveLocalFileSystemURL(imageURI, gotFileEntry, 
	    		fsFail);
	    
	    return deferred.promise;
	},
	}
})