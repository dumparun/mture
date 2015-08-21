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
angular.module('comms').factory('ResponseStatusDataService', function() {

	return function() {

		var status = {
		    code : 0,
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