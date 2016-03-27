(function () {
    'use strict';

    angular
        .module('app')
        .factory('DatabaseFactory', DatabaseFactory);

    DatabaseFactory.$inject = ['$http', 'databaseUrl', '$rootScope'];

    /* @ngInject */
    function DatabaseFactory($http, databaseUrl, $rootScope) {
        var service = {
            getConcerns: getConcerns,
            // postStatusChange: postStatusChange
        };
        return service;

        //////// function definitions /////

        function getConcerns(callback) {
            callback({});
            // $http.get(databaseUrl + '/concerns.json').success(function (data) {
            //     callback(data);
            // }).error(function (error) {
            //     console.log("Didn't get concerns properly");
            // });
        }

        // function postStatusChange(concern_id, status) {
        //     $http.post(databaseUrl + '/concerns.json/' + concern_id + '/status/' + status).success(function () {
        //         console.log('concern posted!');
        //     }).error(function (error) {
        //         if (error) {
        //             console.log('Error:');
        //             console.log(error);
        //         }
        //     });
        // }
    }

})();

