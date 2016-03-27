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
      $http.get(databaseUrl + '/concerns')
        .success(function (data) {
          console.log('This is inside getConcerns. Data:');
          console.log(data);
          callback(data);
        })
        .error(function (error) {
          console.log("Didn't get concerns properly" + error);
        });
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
