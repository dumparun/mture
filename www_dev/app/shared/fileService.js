/*
 *	"THE BEER-WARE LICENSE" (Revision 42): 
 *	arun@dumparun.info wrote this file. 
 * 	As long as you retain this notice you can do whatever you want with this stuff. 
 * 	If we meet some day, and you think this stuff is worth it, you can buy me a beer in return. 
 * 	arun@dumparun.info
 *
 *   http://en.wikipedia.org/wiki/Beerware
 *
 */

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