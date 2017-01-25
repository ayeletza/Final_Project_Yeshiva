app.service("GraduateService", ['$http', '$q', function ($http, $q)
{
    var deferred = $q.defer()
    $http.get("/Graduate").then(function (data)
    {
        deferred.resolve(data);
    });
    this.getStudents = function ()
    {
        return deferred.promise;
    }

}]);