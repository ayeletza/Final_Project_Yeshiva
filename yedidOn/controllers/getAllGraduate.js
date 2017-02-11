myApp.controller('getAllGraduate',function($scope,$routeParams,studentsService) {
    $scope.Id = $routeParams.Id;
    var promise = GraduateService.GraduateService();
    promise.then(function (data)
    {
        $scope.Graduate=data.data;


        for (var i = 0; i < $scope.Graduate.length; i++) {
            if ($scope.Graduate[i].Id ==  $scope.Id)
                $scope.student = $scope.Graduate[i];
        }

        console.log($scope.student);
    });


});
