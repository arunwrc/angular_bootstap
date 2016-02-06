
var app = angular.module('bootstrapApp', ['ngRoute']);


	app.config(['$routeProvider', function($routeProvider,loggedIn,$timeout) {
		$routeProvider.
		when('/home', {templateUrl: 'pages/home.html', controller: 'HomeCtrl'}).
		when('/About', {templateUrl: 'pages/aboutus.html', controller: 'AboutusCtrl'}).
		when('/Contact', {templateUrl: 'pages/contactus.html', controller: 'ContactusCtrl'}).
	    otherwise({redirectTo: '/home'});
	}]);	
	app.controller('HomeCtrl',function ($scope) {
	    $scope.page_title = "About Us";
		$scope.page_slogan = "Why our Clients love to work with us.";
	});
	app.controller('AboutusCtrl',function ($scope) {
	    $scope.page_title = "About Us";
		$scope.page_slogan = "Why our Clients love to work with us.";
	});	
	app.controller('ContactusCtrl',function ($scope) {
	    $scope.page_title = "Contact Us";
		$scope.page_slogan = "Stay close1.";
	});

	