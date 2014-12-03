"use strict";

angular.module('kineticChiroFilters', []).filter('hour_cell', function( ){
	
	return function( input ){
		

		
		if( input == 0 )
		{
			return "closed";
		}
		else if( input == 1 )
		{
			return "open";
		}
		else 
		{
			return "byAppt";
		}
	};
	
	
});