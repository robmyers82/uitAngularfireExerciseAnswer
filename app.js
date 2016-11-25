var app = angular.module('uitexercise', [
	'ngRoute',
	'firebase',
]);

angular.module('uitexercise').config(function($routeProvider) {
	$routeProvider

	.when('/', {
		templateUrl: 'templates/main.html',
		controller: 'MainController'
	})
	.otherwise('/');
});