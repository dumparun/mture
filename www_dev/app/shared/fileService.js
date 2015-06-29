angular.module('file')

.service('FileService', [
        '$q', '$ionicLoading', function($q, $ionicLoading) {

	        return {
		        readFile : function(imageURI) {

			        $ionicLoading.show({
				        template : 'Processing File...'
			        });
			        
			        var deferred = $q.defer();
			        
			        var gotFileEntry = function(fileEntry) {

				        console.log("got file file entry: " + fileEntry.fullPath);
				        
				        fileEntry.file(function(file) {

					        var reader = new FileReader();
					        reader.onloadend = function(evt) {

						        console.log("Read complete!");
						        $ionicLoading.hide();
						        deferred.resolve(evt.target.result);
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