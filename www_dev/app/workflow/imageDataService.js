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