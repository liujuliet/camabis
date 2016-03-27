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
        uploadPhotoEl.onchange = function (e) {
            uploadPhoto(e);
        }

        goNewEl.onclick = function () {
            if (!goNewEl.classList.contains('active')) {
                makeActive(goNewEl);
            }
        }

        goResolvedEl.onclick = function () {
            if (!goResolvedEl.classList.contains('active')) {
                makeActive(goResolvedEl);
            }
        }

        goNonissueEl.onclick = function () {
            if (!goNonissueEl.classList.contains('active')) {
                makeActive(goNonissueEl);
            }
        }

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

        function uploadPhoto(e) {
            e.preventDefault();
            // document.querySelector("[name='upload-photo']").submit();
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
