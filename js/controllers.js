var kineticChiroControllers = angular.module('kineticChiroControllers',[]);

kineticChiroControllers.controller("mobile_menu", function($scope,$location){
	
	$scope.pages = [
		{location : "/home", label : "Home"},
		{location : "/servicesandtechniques", label : "Services & Techniques"},
		{location : "/patientresources", label : "Patient Resources"},
		{location : "/insurance", label : "Insurance"},
		{location : "/newpatients", label : "New Patients"},
		{location : "/aboutus", label : "About Us"}
	];
	
	$scope.navigate = function( )
	{
		$location.path($scope.mobileMenuDropdown.location) ;
	}
	
});

kineticChiroControllers.controller("kc_home", function( $scope, $route ){
	
	$("title").html("KINETIC HEALTH - Home");
});

kineticChiroControllers.controller("kc_servicesTechniques", ['$scope', function( $scope ){
	
	$("title").html("KINETIC HEALTH - Services & Techniques");

	
}]);

kineticChiroControllers.controller("kc_aboutUs", function( $scope ){
	
	$("title").html("KINETIC HEALTH - About Us");
});

kineticChiroControllers.controller("kc_contactUs", function( $scope ){
	
	$("title").html("KINETIC HEALTH - Contact Us");
});

kineticChiroControllers.controller("kc_newPatients", function( $scope ){
	
	$("title").html("KINETIC HEALTH - New Patients");

});

kineticChiroControllers.controller("kc_patientResources", function( $scope ){
	
	$("title").html("KINETIC HEALTH - Patient Resources");

});

kineticChiroControllers.controller("kc_insurance", function( $scope ){
	
	$("title").html("KINETIC HEALTH - Insurance");

});

kineticChiroControllers.controller("kc_Hours", ['$scope', 'Hours', function( $scope, Hours ){
	
	$scope.hours =   Hours.query( );
	
}]);