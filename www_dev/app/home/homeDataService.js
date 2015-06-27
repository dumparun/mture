angular.module('homeApp').service('HomeDataService', [
        'ResponseStatusDataService', function(ResponseStatusDataService) {

	        // private variables
	        var entryList = {};
	        
	        var status = new ResponseStatusDataService();
	        
	        this.getEntryList = function() {

		        return entryList;
	        };
	        
	        this.setEntryList = function(list) {

		        entryList = list;
	        };
	        
	        this.setStatus = function(stat) {

		        status.setStatus(stat);
	        };
	        
	        this.getStatus = function(){
	        	return status;
	        }
        }
]);