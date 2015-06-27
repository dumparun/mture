angular.module('comms').factory('ResponseStatusDataService', function() {

	return function() {

		var status = {
		    code : 999,
		    message : "Oops... This is embarrassing!! We will fix it soon",
		};
		
		this.getStatus = function() {

			return status;
		};
		
		this.setStatus = function(stat) {

			status = stat;
		};
		
		this.setStatusCode = function(code) {

			status.code = code;
		};
		
		this.setStatusMessage = function(message) {

			status.message = message;
		}
		
		this.getStatusCode = function() {

			return status.code;
		};
		
		this.getStatusMessage = function() {

			return status.message;
		}
	};
});