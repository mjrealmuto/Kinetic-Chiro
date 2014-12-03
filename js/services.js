"use strict";

var kineticChiroServices = angular.module("kineticChiroServices",['ngResource']);

kineticChiroServices.factory("Hours",['$resource', function( $resource){
	
	return $resource('hours.json',{}, {
		
		query: {isArray: true}
		
	});
}]);