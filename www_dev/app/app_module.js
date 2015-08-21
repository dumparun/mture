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
var mtureApp = angular.module('mtureApp', [
        'ionic', 'ngCordova', 'ngMessages', 'pascalprecht.translate', 'loginApp', 'homeApp',
        'workflowApp', 'comms', 'file'
]);

angular.module('loginApp', []);

angular.module('homeApp', []);

angular.module('workflowApp', []);

angular.module('comms', []);

angular.module('file', []);

angular.module('mtureApp')

mtureApp.config([
        '$translateProvider', function($translateProvider) {

	        $translateProvider.useStaticFilesLoader({
	            prefix : 'app/i18n/locale-',
	            suffix : '.json'
	        });
	        // Tell the module what language to use by default
	        $translateProvider.preferredLanguage('en_US');
	        
	        $translateProvider.useSanitizeValueStrategy('sanitize');
        }
]);

mtureApp.run([
        '$ionicPlatform', '$cordovaSplashscreen', function($ionicPlatform, $cordovaSplashscreen) {

	        $ionicPlatform.ready(function() {

		        // Hide the accessory bar by default (remove this to
		        // show the accessory bar above the keyboard
		        // for form inputs)
		        if (window.cordova && window.cordova.plugins.Keyboard) {
			        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
		        }
		        if (window.StatusBar) {
			        // org.apache.cordova.statusbar required
			        StatusBar.styleDefault();
		        }
		        setTimeout(function() {

			        $cordovaSplashscreen.hide();
		        }, 3000)
	        });
        }
]);