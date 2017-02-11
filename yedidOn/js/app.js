//BS"D

//require('../data/dbconnection.js').open();

var myApp=angular.module('myApp',['ngRoute']);
myApp.config(function($routeProvider)
{
	$routeProvider
	.when('/',
	{
		templateUrl:'/home.html',
		controller:'HomeController'
	})
	.when('/home',
	{
		templateUrl:'/home.html',
		controller:'HomeController'
	})
	.when('/newGraduate',
	{
		templateUrl:'/newGraduate.html',
		controller:'newGraduateController'
	})
	.when('/graduate',
	{
		templateUrl:'/graduate.html',
		controller:'GraduateController'
	})
	.when('/newDonation',
	{
		templateUrl:'/newDonation.html',
		controller:'newDonationController'
	})
	
});

myApp.controller('HomeController',function($scope)
{
	$scope.msg='Welcome to the home page';
});
myApp.controller('newGraduateController',function($scope)
{
	$scope.msg='Welcome to the project page';

	$scope.test = "Test"
});
myApp.controller('newDonationController',function($scope)
{
	$scope.msg='Welcome to the project page';

	$scope.test = "Test"
});
myApp.controller('GraduateController',function($scope)
{
	$scope.msg='Welcome to the project page';

	$scope.test = "Test"
});
