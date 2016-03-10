myApp.factory('Data',['$rootScope', '$http', function($rootScope, $http) {

    return {
        getFile: getFile
    };

    function getFile(path, callback) {;
        $http.get(path)
            .success(function (res) {
                return callback(res);

            })
    }

}]);