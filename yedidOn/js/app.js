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
   $scope.CreateGraduate = function()
   {
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
				"adress": GraduateForm.address.value,
				"email": GraduateForm.email.value,
				"year": GraduateForm.year.value
			};

		xmlhttp.onreadystatechange = function ()
		{

			if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
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
	$scope.CreateDonate = function()
	{
		if (window.XMLHttpRequest)
			var xmlhttp = new XMLHttpRequest();
		else
			var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

	 		var details=
			{
				"id": donateForm.id.value,
				"date": donateForm.date.value,
				"sum": donateForm.sum.value,
				"paymentWay":donateForm.paymentWay.value,
			};

		xmlhttp.onreadystatechange = function ()
		{

			if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
			{
				alert(xmlhttp.responseText);
				$scope.$apply();
			}
		}
		xmlhttp.open('POST', 'http://localhost:8080/CreateDonate');
		xmlhttp.setRequestHeader("Content-Type", "application/json;charset=utf-8");
		xmlhttp.send(JSON.stringify(details));
	}
});
myApp.controller('GraduateController',function($scope)
{
	if (window.XMLHttpRequest)
            var xmlhttp = new XMLHttpRequest();
        else
            var xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
 	xmlhttp.onreadystatechange = function ()
 	{

            if (xmlhttp.readyState == 4 && xmlhttp.status == 200)
            {
                var parsed = JSON.parse(xmlhttp.response);

                var arr = [];

                for(var x in parsed)
                {
                    arr.push(parsed[x]);
                };

                var y=document.getElementById("content").innerHTML="";

                y+='<center><table id="listOfGraduates">';
				y+='<tr><td><b><u>שם:</u></b></td><td><b><u>שם משפחה:</u></b></td><td><b><u>מספר זהות:</u></b></td><td><b><u>נייח:</u></b></td><td><b><u>נייד:</u></b></td><td><b><u>מייל:</u></b></td><td><b><u>שנת לימוד:</u></b></td></tr>';

                for(i=0;i<arr.length;i++)
                {
                	y+='<tr>';
                    y+='<td>'+arr[i].firstName+'</td>';
                    y+='<td>'+arr[i].lastName+'</td>';
                    y+='<td>'+arr[i].id+'</td>';
                    y+='<td>'+arr[i].phone+'</td>';
                    y+='<td>'+arr[i].cellPhone+'</td>';
                    y+='<td>'+arr[i].email+'</td>';
                    y+='<td>'+arr[i].course+'</td>';
                    y+='</tr>';
                };

                y+='</table></center>';

                document.getElementById("content").innerHTML=y;

                $scope.$apply();
            }
	}
        xmlhttp.open('GET', 'http://localhost:8080/GetGraduates');
        xmlhttp.send();
});