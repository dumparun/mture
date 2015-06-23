var mtureApp = angular.module('mtureApp', [ 'ionic', 'ngCordova', 'ngMessages',
		'loginApp', 'homeApp', 'workflowApp' ]);

angular.module('loginApp', [ 'loginApp.controller' ]);

angular.module('homeApp', [ 'homeApp.controller' ]);

angular.module('workflowApp', [ 'workflowApp.controller' ]);

mtureApp.run(
		[
				'$ionicPlatform',
				'$cordovaSplashscreen',
				function($ionicPlatform, $cordovaSplashscreen) {
					$ionicPlatform.ready(function() {
						// Hide the accessory bar by default (remove this to
						// show the accessory bar above the keyboard
						// for form inputs)
						if (window.cordova && window.cordova.plugins.Keyboard) {
							cordova.plugins.Keyboard
									.hideKeyboardAccessoryBar(true);
						}
						if (window.StatusBar) {
							// org.apache.cordova.statusbar required
							StatusBar.styleDefault();
						}
						setTimeout(function() {
							$cordovaSplashscreen.hide()
						}, 3000)
					});
				} ])

.config(
		[ '$stateProvider', '$urlRouterProvider',
				function($stateProvider, $urlRouterProvider) {

					$stateProvider

					.state('login', {
						url : '/login',
						templateUrl : 'app/login/login.htm',
						controller : 'LoginController'
					})

					.state('home', {
						url : '/home',
						templateUrl : 'app/home/home.htm',
						controller : 'HomeController'
					})

					.state('workflow', {
						url : '/workflow',
						templateUrl : 'app/workflow/workflow.htm',
						controller : 'WorkflowController'
					})

					.state('showImage', {
						url : '/showImage',
						templateUrl : 'app/workflow/image.htm',
						controller : 'ImageController'
					});

					$urlRouterProvider.otherwise('/login');

				} ]);