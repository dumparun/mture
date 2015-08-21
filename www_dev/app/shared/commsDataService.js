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
angular.module('comms')
.factory('CommsDataService', function() {

	return function() {

		this.defaultCommsConfig = {
		    loadingTemplate : "Loading ...",
		    baseURL : "http://www.dumparun.info/dev/mture/index.php/",
		    urlPath : "",
		    method : "POST",
		    postData: {},
		    contentType : "application/json",
		};
		
		this.config = function() {

			return this.defaultCommsConfig;
		};
		
		this.setURLPath = function(urlPath) {

			this.defaultCommsConfig.urlPath = urlPath;
		};
		
		this.getURLPath = function() {

			return this.defaultCommsConfig.urlPath;
		};
		
		this.setLoadingTemplate = function(loadingTemplate) {

			this.defaultCommsConfig.loadingTemplate = loadingTemplate;
		};
		
		this.getLoadingTemplate = function() {

			return this.defaultCommsConfig.loadingTemplate;
		};
		
		this.setPostData = function(postData) {

			this.defaultCommsConfig.postData = postData;
		};
		
		this.getPostData = function() {

			return this.defaultCommsConfig.postData;
		};
	};
});