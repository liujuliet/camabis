angular.module('app').config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: 'home.html',
            controller: 'HomeController'
        })
        .otherwise({
            redirectTo: '/'
        });

}]);

angular.module('app').config(['$httpProvider', function ($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    // $httpProvider.defaults.headers.post
}]);
