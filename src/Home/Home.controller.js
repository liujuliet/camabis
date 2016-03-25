(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http', 'DatabaseFactory', '$scope', '$rootScope'];

    function HomeController($http, DatabaseFactory, $scope, $rootScope) {
        $rootScope.mobile = document.documentElement.classList.contains('mobile');
        $scope.showNav = $rootScope.mobile ? false : true;
        activate();

        /* Function Definitions */
        function activate() {
            getJmap();
            DatabaseFactory.getConcerns(function (concerns) {
                $scope.concernContainer = concerns;
            });
        }

        function getJmap() {
            $http.get('jmap.json').success(function (data) {
                $scope.jmap = data;
            }).error(function (error) {
                console.log("Didn't get jmap properly");
            });
        }

        /* Scope Functions */
        $scope.toggleNav = function ()  {
            $scope.showNav = !$scope.showNav;
        }
    }

})();
