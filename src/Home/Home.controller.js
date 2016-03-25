(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location', 'DatabaseFactory', '$scope'];

    function HomeController($location, DatabaseFactory, $scope) {
        $scope.showNav = true;
        activate();

        /* Function Definitions */
        function activate() {
            DatabaseFactory.getConcerns(function (concerns) {
                $scope.concernContainer = concerns;
            });
        }

        /* Scope Functions */
        $scope.toggleNav = function ()  {
            $scope.showNav = !$scope.showNav;
        }
    }

})();
