angular.module('mtureApp')

.config([
        '$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

	        $stateProvider

	        .state('login', {
	            url : '/login',
	            templateUrl : 'app/login/loginView.htm',
	            controller : 'LoginController'
	        })

	        .state('home', {
	            url : '/home',
	            templateUrl : 'app/home/homeView.htm',
	            controller : 'HomeController'
	        })

	        .state('workflow', {
	            url : '/workflow',
	            templateUrl : 'app/workflow/workflowView.htm',
	            controller : 'WorkflowController'
	        })
	        
	        .state('workflow?error', {
	            url : '/workflow',
	            templateUrl : 'app/workflow/workflowView.htm',
	            controller : 'WorkflowController'
	        })

	        .state('showImage', {
	            url : '/showImage',
	            templateUrl : 'app/workflow/imageView.htm',
	            controller : 'ImageController'
	        })
	       
	        .state('showImage?error', {
	            url : '/showImage',
	            templateUrl : 'app/workflow/imageView.htm',
	            controller : 'ImageController'
	        });
	        
	        $urlRouterProvider.otherwise('/workflow');
	        
        }
],

// To be run in production mode to disable debug.
// if you are running in debug mode, comment the below code out.
[
        '$compileProvider', function($compileProvider) {

	        $compileProvider.debugInfoEnabled(false);
        }
]);