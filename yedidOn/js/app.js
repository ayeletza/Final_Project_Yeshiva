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
	$scope.CreateGraduate = function() {

		if (window.XMLHttpRequest)
			var xmlhttp = new XMLHttpRequest();
		else
			var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	 		var details=
			{
				"firstName": GraduateForm.firstName.value,
				"lastName": GraduateForm.lastName.value,
				"id": GraduateForm.id.value,
				"phone":GraduateForm.phone.value,
				"cellPhone": GraduateForm.cellPhone.value,
				"adress": GraduateForm.adress.value,
				"email": GraduateForm.email.value,
				"course": GraduateForm.course.value
			};

		xmlhttp.onreadystatechange = function () {

			if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

				alert(xmlhttp.responseText);
				$scope.$apply();


			}
		}
		xmlhttp.open('POST', 'http://localhost:8080/CreateGraduate');
		xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
		xmlhttp.send(JSON.stringify(details));
	}
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
