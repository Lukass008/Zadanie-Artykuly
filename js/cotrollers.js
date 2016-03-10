myApp.controller('navController', ['$scope', '$location', function($scope, $location){
    $scope.redirect = function(path){
        $location.path(path);
    }
}]);

myApp.controller('speckyboyController', ['$http', '$scope', 'Data', '$rootScope', function($http, $scope, Data, $rootScope){
    console.log('kontroler SB');
    Data.getFile('Speckyboy.json', function (jsonData) {
        var table = jsonData.Speckyboy;
        var agregateTable = [];
        for (var i = 0; i <= table.length; i += 2) {
            if (table[i]) {
                agregateTable.push([table[i], table[i + 1]]);
            }
        }

        $scope.articles = agregateTable;
        $rootScope.sbClass = "active";
        $rootScope.mgClass = "";
        $rootScope.contactClass = "";

    });
}]);


myApp.controller('medgadgetController', ['$http', '$scope', 'Data', '$rootScope', function($http, $scope, Data, $rootScope){
    console.log('kontroler MG');
    Data.getFile('Medgadget.json', function (jsonData) {

        var table = jsonData.Medgadget;
        var agregateTable = [];
        for (var i = 0; i <= table.length; i += 3) {
            if (table[i]) {
                agregateTable.push([table[i], table[i + 1], table[i + 2]]);
            }
        }

        $scope.articles = agregateTable;
        $rootScope.sbClass = "";
        $rootScope.mgClass = "active";
        $rootScope.contactClass = "";

    });
}]);


myApp.controller('contactController', ['$http', '$scope', 'Data', '$rootScope', function($http, $scope, Data, $rootScope){
    $rootScope.sbClass = "";
    $rootScope.mgClass = "";
    $rootScope.contactClass = "active";

    $scope.send = function () {
        if ($scope.myForm.$valid) {
            alert("Dziękujemy " + $scope.user.name + ", Twoja wiadomość została wysłana")
        }
    };

    $scope.check = function(){

    }


}]);