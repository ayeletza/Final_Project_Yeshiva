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
	.when('/olders',
	{
		templateUrl:'/olders.html',
		controller:'OldersController'
	})
	.when("/donates",
	{
			templateUrl:'/donates.html',
			controller:'DonatesController'
	})
	.when("/register",
	{
		templateUrl:'/register.html',
		controller:'RegisterController'
	})
	.when("/user",
	{
		templateUrl:'/user.html',
		controller:'UserController'
	})
	.when("/details",
	{
		templateUrl:'/details.html',
		controller:'DetailController'
	})
	.when("/donateRegister",
	{
		templateUrl:'/donateRegister.html',
		controller:'DonateRegisterController'
	})
	.when("/donateState",
	{
		templateUrl:'/donateState.html',
		controller:'DonateStateController'
	})
});

myApp.controller('HomeController',function($scope)
{
	$scope.msg='Welcome to the home page';
});
myApp.controller('OldersController',function($scope)
{
	$scope.msg='Welcome to the project page';

	$scope.test = "Test"
});
myApp.controller('DonatesController',function($scope)
{
	$scope.msg='Welcome to the contact page';
});
myApp.controller('RegisterController',function($scope)
{
	$scope.msg='Welcome to the register page';
});
myApp.controller('UserController',function($scope)
{
	$scope.msg='Welcome to the user page';
	$scope.students=[
	{
		name: "אלי",
		id: 1234
	},
	{
		name: "משה",
		id: 9876
	}];
});
myApp.controller('DetailsController',function($scope)
{
	$scope.msg='Welcome to the details page';
});
myApp.controller('DonateRegisterController',function($scope)
{
	$scope.msg='Welcome to the donate register page';
});
myApp.controller('DonateStateController',function($scope)
{
	$scope.msg='Welcome to the donate state page';
});