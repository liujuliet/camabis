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
        postPhoto: postPhoto
    };
    return service;

    //////// function definitions /////

    function getConcerns(callback) {
      $http.get(databaseUrl + '/api/concerns')
        .success(function (data) {
          callback(data);
        })
        .error(function (error) {
          console.log("Didn't get concerns properly" + error);
        });
    }

    function postPhoto(imgUrl) {
      console.log(imgUrl);
      $http.post(databaseUrl + '/api/photo', imgUrl)
        .success(function() {
          console.log('Sucessfully posted photo.');
        })
        .error(function (error) {
          console.log("Didn't post photo properly" + error);
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
