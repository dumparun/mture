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
angular.module('mtureApp')

.config(
        [
                '$stateProvider', '$urlRouterProvider',
                function($stateProvider, $urlRouterProvider) {

	                $stateProvider

	                .state('login', {
	                    cache : false,
	                    url : '/login',
	                    templateUrl : 'app/login/loginView.htm',
	                    controller : 'LoginController'
	                })

	                .state('home', {
	                    cache : false,
	                    url : '/home',
	                    templateUrl : 'app/home/homeView.htm',
	                    controller : 'HomeController'
	                })

	                .state('workflow', {
	                    cache : false,
	                    url : '/workflow',
	                    templateUrl : 'app/workflow/workflowView.htm',
	                    controller : 'WorkflowController'
	                })

	                .state('showImage', {
	                    url : '/showImage',
	                    templateUrl : 'app/workflow/imageView.htm',
	                    controller : 'ImageController'
	                });

	                $urlRouterProvider.otherwise('/login');
                }
        ],

        // To be run in production mode to disable debug.
        // if you are running in debug mode, comment the below code out.
        [
                '$compileProvider', function($compileProvider) {

	                $compileProvider.debugInfoEnabled(false);
                }
        ]);