'use strict';

angular.module('app.list')
.service('listService', ['$http', 'baseUrl', function($http, baseUrl) {
	var api = {};
	
	api.getAllData = function() {
		return $http.get(baseUrl + '/r/all.json');
	}
	api.getNextData = function(startIndex) {
		return $http.get(baseUrl + '/?count=' + startIndex + '&after=t3_6o0hhr');
	}
	api.getPrevData = function(endIndex) {
		return $http.get(baseUrl + '?count=' + endIndex + '&before=t3_6o1f6h');
	}
	return api;
}]);
