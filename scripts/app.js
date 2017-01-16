angular.module('socialApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home')

    $stateProvider
        .state('view-friends', {
            url: '/view-friends',
            templateUrl: './views/view-friends.html'
            // controller: 'friendsController'
        })
        .state('home', {
            url: '/home',
            templateUrl: './views/home.html'
            // controller: 'profileController'
        })
        .state('my-profile', {
            url: '/my-profile',
            templateUrl: './views/my-profile.html'
            // controller: 'profileController'
        })

});
