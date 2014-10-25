angular.module("angularOnFire", ["ngMaterial", "firebase"])
    .controller("indexController", ["$scope", "$mdToast", "performers", "$mdDialog", function($scope, $mdToast, performers, $mdDialog) {
        "use strict";
        $scope.performers =  performers.all;

        $scope.newPerformer = {};

        $scope.addPerformer = function() {
            $scope.performers.$add($scope.newPerformer);
            $scope.newPerformer = {};
            
        };

        $scope.dialogNewPerformer = function(e) {
            $mdDialog.show({
                    templateUrl: "../dialog-new-performer/new-performer-tpl.html",
                    targetEvent: e, 
                    controller: "dialogNewPerformerController"
                }
            ).then(function(answer) {
                $scope.performers.$add(answer);
                $mdToast.show({
                    template: "<md-toast>New performer saved.</md-toast>",
                    hideDelay: 2000,
                    position: "top right"
                });
            });
            
            
        };

    }]);