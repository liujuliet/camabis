(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$location', 'DatabaseFactory', '$scope'];

    function HomeController($location, DatabaseFactory, $scope) {
        activate();

        //////// function definitions /////
        function activate() {
            DatabaseFactory.getConcerns(function (concerns) {
                $scope.concernContainer = concerns;
            });
        }

    }

})();
