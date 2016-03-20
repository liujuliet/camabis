angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'Home/home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);
