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
angular
        .module('mtureApp')
        
        .directive(
                'mtAlert',
                [
                        '$timeout',
                        '$document',
                        function($timeout, $document) {

	                        return {
	                            restrict : 'AE',
	                            replace : true,
	                            template : '<div  ng-hide = "angular.isUndefined(alert)" class={{alert.type}}>{{alert.message}}</div>',
	                            link : function(scope, elem, attrs) {

		                            $timeout(function() {

			                            elem.remove();
		                            }, 5000);
		                            
		                            $document.bind('click', function() {

			                            elem.remove();
		                            });
	                            },
	                        };
                        }
                ]);
