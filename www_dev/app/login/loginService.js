angular.module('loginApp')

.service(
        'LoginService',
        [
                'CommsService', 'CommsDataService', 'HomeDataService',
                function( CommsService, CommsDataService, HomeDataService) {

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
				                HomeDataService.getStatus().setStatusMessage("You have successfully Logged in !!!");
				                if (response.data.status.code == 0) {
					                console.log(response.data.entriesList);
					                HomeDataService.setEntryList(response.data.entriesList);
				                }
			                })
			                .catch(function(response) {
			                	console.error(response);
			                	HomeDataService.getStatus().setStatusCode(901);
			                	HomeDataService.getStatus().setStatusMessage("This is not how this was supposed to behave... Try again please !!!");
			                });
		                },
	                }
                }
        ]);