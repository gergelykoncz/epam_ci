angular.module('angularZero', ['ngRoute'])
	.config(appConfig)
	.controller('mainCtrl', mainCtrl)
	.controller('detailsCtrl', detailsCtrl)
	;

appConfig.$inject = [ '$routeProvider' ];
function appConfig($routeProvider) {
	$routeProvider
		.when('/', {
			template: '<div>{{currentController}}</div>',
			controller: 'mainCtrl'
		})
		.when('/details', {
			template: '<div>{{currentController}}</div>',
			controller: 'detailsCtrl'
		})
}

mainCtrl.$inject = [ '$scope' ];
function mainCtrl($scope) {
	$scope.currentController = '[Main Controller]';

	$scope.double = function(x) {
		return x*2;
	}
}

detailsCtrl.$inject = [ '$scope' ];
function detailsCtrl($scope) {
	$scope.currentController = '[Details Controller]';
}