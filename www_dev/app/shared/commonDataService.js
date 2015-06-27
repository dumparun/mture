angular.module('homeApp').service('CommonDataService', [
        'ResponseStatusDataService', function(ResponseStatusDataService) {

	        // private variables
	        var status = new ResponseStatusDataService();
	        
	        this.setStatus = function(stat) {

		        status.setStatus(stat);
	        };
	        
	        this.getStatus = function() {

		        return status;
	        }
        }
]);