angular.module('startup', ['ionic', 'ngCordova', 'ngMessages', 'startup.controllers'])

    .run(function ($ionicPlatform, $cordovaSplashscreen) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
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
    })

    .config(function ($stateProvider, $urlRouterProvider) {

        $stateProvider

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.htm',
                controller: 'LoginController'
            })

            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.htm',
                controller: 'HomeController'
            })
            
            .state('actionItems', {
                url: '/actionItems',
                templateUrl: 'templates/actions.htm',
                controller: 'ActionsController'
            })
            
            .state('showImage', {
                url: '/showImage',
                templateUrl: 'templates/image.htm',
                controller: 'ImageController'
            });

        $urlRouterProvider.otherwise('/login');

    });