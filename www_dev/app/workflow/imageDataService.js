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
angular.module('workflowApp').service('ImageDataService', [
	function() {

		// private variables
		var imageBase64 = "";
		var imageComments = "";
		
		this.getImageBase64 = function() {

			return imageBase64;
		};
		
		this.setImageBase64 = function(image) {

			imageBase64 = image;
		};
		
		this.getImageComments = function() {

			return imageComments;
		};
		
		this.setImageComments = function(comments) {

			imageComments = comments;
		};
	}
]);