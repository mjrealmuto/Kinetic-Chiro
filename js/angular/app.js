"use strict";

var phonecatApp = angular.module('phonecatApp',[
	'ngRoute',
	'phonecatControllers',
	'phonecatFilters',
	'phonecatServices',
	'phonecatAnimations'
]);

phonecatApp.config(['$routeProvider',
	function($routeProvider){
		
		$routeProvider.
		when('/phones', {
			templateUrl : "partials/phone-list.html",
			controller : "PhoneListCtrl"
		}).
		when('/phones/:phoneId', {
			templateUrl : "partials/phone-detail.html",
			controller : "PhoneDetailCtrl"
		}).
		otherwise({
			redirectTo : '/phones'
		});	
}]);

