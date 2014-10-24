angular.module("angularOnFire", ["ngMaterial", "firebase"])
    .controller("indexController", ["$scope", "$mdToast", "performers", function($scope, $mdToast, performers) {
        "use strict";
        $scope.performers =  performers.all;

        $scope.newPerformer = {};

        $scope.addPerformer = function() {
            $scope.performers.$add($scope.newPerformer);
            $scope.newPerformer = {};
            $mdToast.show({
                template: "<md-toast>New performer saved.</md-toast>",
                hideDelay: 2000,
                position: "top right"
            })
        };

    }]);