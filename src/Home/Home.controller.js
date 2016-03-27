(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$http', 'DatabaseFactory', '$scope', '$rootScope'];

    function HomeController($http, DatabaseFactory, $scope, $rootScope) {
        /* Element selectors and scope variables */
        var uploadPhotoEl = document.querySelector("[name='upload-photo']");
        var goNewEl = document.querySelector("[role='goNew']");
        var goResolvedEl = document.querySelector("[role='goResolved']");
        var goNonissueEl = document.querySelector("[role='goNonissue']");

        $rootScope.mobile = document.documentElement.classList.contains('mobile');
        $scope.showNav = $rootScope.mobile ? false : true;
        $scope.status = 'new';

        /* Event Listeners */
        uploadPhotoEl.addEventListener('change', function (e) {
            e.preventDefault();
            var files = e.target.files;

            for (var i = 0; i < files.length; i++) {
                var file = files[i];

                if (file.type.match(/image.*/)) {
                    uploadPhoto(file);
                } else {
                    return alert("Only images are accepted.");
                }
            }
        });

        goNewEl.addEventListener('click', function (e) {
            if (!goNewEl.classList.contains('active')) {
                makeActive(goNewEl);
            }
        });

        goResolvedEl.addEventListener('click', function (e) {
            if (!goResolvedEl.classList.contains('active')) {
                makeActive(goResolvedEl);
            }
        });

        goNonissueEl.addEventListener('click', function (e) {
            if (!goNonissueEl.classList.contains('active')) {
                makeActive(goNonissueEl);
            }
        });

        /* Initiate */
        makeActive(goNewEl);
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

        function uploadPhoto(file) {
            var req = {
                method: 'POST',
                url: 'https://api.imgur.com/3/image',
                headers: {
                    'Authorization': 'Client-ID a83b8d484886938',
                    'Content-type': 'application/x-www-form-urlencoded'
                },
                data: file
            }

            $http(req).then(function success (res) {
                console.log(res.data.data.link);
            }, function err (res) {
                console.log(res);
            });
        }

        function makeActive(el) {
            goNewEl.classList.remove('active');
            goResolvedEl.classList.remove('active');
            goNonissueEl.classList.remove('active');
            el.classList.add('active');
        }

        /* Scope Functions */
        $scope.toggleNav = function ()  {
            $scope.showNav = !$scope.showNav;
        }
    }

})();
