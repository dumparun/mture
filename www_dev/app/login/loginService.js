angular.module('loginApp')

.factory(
        'LoginService',
        [
                '$http', '$ionicLoading', 'CommsService', 'CommsDataService', 'HomeDataService',
                function($http, $ionicLoading, CommsService, CommsDataService, HomeDataService) {

	                return {
		                login : function(loginID, password) {

			                var postData = {
			                    "loginID" : loginID,
			                    "password" : password
			                };
			                
			                commsData = new CommsDataService;
			                commsData.setLoadingTemplate("Logging In ...");
			                commsData.setURLPath("V1/Mture/login");
			                commsData.setPostData(postData);
			                return new CommsService.communicate(commsData).then(function(response) {

				                HomeDataService.setStatus(response.data.status);
				                if (response.data.status.code == 0) {
					                console.log(response.data.entriesList);
					                HomeDataService.setEntryList(response.data.entriesList);
				                }
			                });
		                },
	                }
                }
        ]);