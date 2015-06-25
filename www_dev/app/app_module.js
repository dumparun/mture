var mtureApp = angular.module('mtureApp', [
        'ionic', 'ngCordova', 'ngMessages', 'loginApp', 'homeApp', 'workflowApp', 'comms'
]);

angular.module('loginApp', []);

angular.module('homeApp', []);

angular.module('workflowApp', []);

angular.module('comms', []);

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

			        $cordovaSplashscreen.hide()
		        }, 3000)
	        });
        }
]);