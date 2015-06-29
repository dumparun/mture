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
