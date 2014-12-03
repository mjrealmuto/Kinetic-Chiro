var kineticChiroModule = new angular.module('kinetic_chiro_module',['ngRoute', 
																	'kineticChiroServices',
																	'kineticChiroFilters',
																	'kineticChiroControllers'
											]);



kineticChiroModule.config(['$routeProvider',
	function( $routeProvider){
		

		
		
		
		$routeProvider.
		when('/home',{
			templateUrl : 'partials/home.html',
			controller : 'kc_home',
			title : 'KINETIC HEALTH - Home'
		}).
		when('/servicesandtechniques',{
			templateUrl : '/test/kinetic_chiro/partials/servicesandtechniques.html',
			controller : 'kc_servicesTechniques'
		}).		
		when('/aboutus',{
			templateUrl : 'partials/about_us.html',
			controller : 'kc_aboutUs'
		}).
		when('/contactus',{
			templateUrl : 'partials/contact_us.html',
			controller : 'kc_contactUs'
		}).
		when('/newpatients',{
			templateUrl : 'partials/new_patients.html',
			controller : 'kc_newPatients'
		}).
		when('/patientresources',{
			templateUrl : 'partials/patientresources.html',
			controller : 'kc_patientResources'
		}).
		when('/insurance',{
			templateUrl : 'partials/insurance.html',
			controller : 'kc_insurance'
		}).
		otherwise({
			redirectTo: '/home'
		});
		
	}
]);

