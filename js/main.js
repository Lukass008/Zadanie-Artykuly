var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function ($routeProvider){
    $routeProvider
        .when('/speckyboy', {
            templateUrl: 'partials/speckyboy.html',
            controller: 'speckyboyController'
        })
        .when('/medgadget', {
            templateUrl: 'partials/medgadget.html',
            controller: 'medgadgetController'
        })
        .when('/contact', {
            templateUrl: 'partials/contact.html',
            controller: 'contactController',
        })
        .when('../', {
            redirect: '/speckyboy'
        })
        .otherwise({
        redirectTo: '/speckyboy'
        })
}]);



myApp.controller('navController', ['$scope', '$location', function($scope, $location){
    $scope.redirect = function (path) {
        $location.path(path);
    }
}]);