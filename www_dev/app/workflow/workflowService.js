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
angular.module('workflowApp')

.service(
        'PingService',
        [
                'CommsService', 'CommsDataService', 'CommonDataService',
                function(CommsService, CommsDataService, CommonDataService) {

	                return {
		                ping : function() {

			                var postData = {
				                "ping" : "ping"
			                };
			                
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Pinging Service ...");
			                commsData.setURLPath("V1/Mture/ping");
			                commsData.setPostData(postData);
			                return new CommsService.communicate(commsData).then(function(response) {

				                CommonDataService.setStatus(response.data);
			                });
		                },
		                pingForError : function() {

			                var postData = {
				                "ping" : "ping"
			                };
			                
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Pinging Service ...");
			                commsData.setURLPath("V1/Mture/errorping");
			                commsData.setPostData(postData);
			                return new CommsService.communicate(commsData).then(function(response) {
			                	console.log(response);
			                	CommonDataService.setStatus(response.data);
			                })
			                .catch(function(response) {
			                	console.error(response);
			                	CommonDataService.getStatus().setStatusCode(response.status);
			                	CommonDataService.getStatus().setStatusMessage(response.statusText);
			                });
		                },
		                
		                pingForHTTPError : function() {

			                var postData = {
				                "ping" : "ping"
			                };
			                
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Pinging Service ...");
			                commsData.setURLPath("V1/Mture/serviceDoesNotExist");
			                commsData.setPostData(postData);
			                return new CommsService.communicate(commsData).then(function(response) {
			                	console.log(response);
				                CommonDataService.setStatus(response.data);
			                })
			                .catch(function(response) {
			                	console.error(response);
			                	CommonDataService.getStatus().setStatusCode(response.status);
			                	CommonDataService.getStatus().setStatusMessage(response.statusText);
			                });
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
                'CommsDataService',
                'CommonDataService',
                function($http, $ionicLoading, $cordovaGeolocation, $q, CommsService,
                        CommsDataService, CommonDataService) {

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
				                        commsData = new CommsDataService;
				                        commsData.setLoadingTemplate("Updating Location ...");
				                        commsData.setURLPath("V1/Mture/location");
				                        commsData.setPostData(postData);
				                        return new CommsService.communicate(commsData)
				                                .then(function(response) {

					                                CommonDataService.setStatus(response.data);
					                                deferred.resolve(response);
				                                });
				                        $ionicLoading.hide();
				                        
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

.factory(
        'UploadService',
        [
                'CommsService', 'CommsDataService', 'CommonDataService', 'ImageDataService',
                function(CommsService, CommsDataService, CommonDataService, ImageDataService) {

	                return {
		                uploadData : function() {

			                var postData = {
			                    "data" : ImageDataService.getImageBase64(),
			                    "comments" : ImageDataService.getImageComments(),
			                    "type" : "image"
			                };
			                
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Uploading Photos ...");
			                commsData.setURLPath("V1/Mture/upload");
			                commsData.setPostData(postData);
			                return new CommsService.communicate(commsData).then(function(response) {

				                CommonDataService.setStatus(response.data);
			                })
			                .catch(function(response) {
			                	console.error(response);
			                	CommonDataService.getStatus().setStatusCode(900);
			                	CommonDataService.getStatus().setStatusMessage("This is embarassing !!! Could you please trying till it succeeds :D :D");
			                });
		                },
	                }
                }
        ])