'use strict';

angular.module('app.list', [])
.config(['$stateProvider', function($stateProvider) {
	$stateProvider
		.state('list', {
			url: '/',
			templateUrl: 'app/list/list.html',
			controller: 'listCtrl',
			controllerAs: 'vm'
		})
}])
.controller('listCtrl', ['listService', function(listService) {
	var vm = this;
	
	angular.extend(vm, {
		mediaData: []
	});
	listService.getAllData().then(function(response) {
		vm.mediaData = response.data.data.children;
	});
}]);
