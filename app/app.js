'use strict';

angular.module('app', [    	
	'ui.router',
	'ui.bootstrap',
  'app.directive',
	'app.list'
])
.config(['$locationProvider', function($locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    }).hashPrefix('!');
    // $routeProvider.otherwise({redirectTo: '/list'});
}])
.constant('baseUrl', 'https://www.reddit.com');
