angular.module("angularOnFire")
    .directive("performerDirective", ["performers", "$mdToast", function (performers, $mdToast) {
        "use strict";
        return {
            require: "ngModel",
            restrict: "E",
            scope: {
                performer: "=ngModel"
            },
            templateUrl: "./performer-template.html",
            link: function(scope, element, attrs) {
                var originalPerformer = angular.copy(scope.performer);

                scope.selected = false;

                scope.edit = function() {
                    scope.selected = true;
                };

                scope.updatePerformer = function() {
                    var performerToUpdate = performers.get(scope.performer.$id)
                    for (var prop in scope.performer) {
                        if (scope.performer[prop] !== originalPerformer[prop]) {
                            performerToUpdate[prop] = scope.performer[prop];
                        }
                    }
                    performers.update(performerToUpdate).then(function() {
                        $mdToast.show({
                            template: "<md-toast>Performer updated.</md-toast>",
                            hideDelay: 2000,
                            position: "top right"
                        });
                    });
                    scope.selected = false;
                };

                scope.delete = function() {
                    var performerToRemove = performers.get(scope.performer.$id)
                    performers.delete(performerToRemove).then(function() {
                        $mdToast.show({
                            template: "<md-toast>Performer deleted.</md-toast>",
                            hideDelay: 2000,
                            position: "top right"
                        });
                    });
                }
            }
        }
    }]);