angular.module("angularOnFire")
	.controller("dialogNewPerformerController", ["$scope", "$mdDialog", function($scope, $mdDialog) {
		"use strict";

		$scope.newPerformer = {};

		$scope.cancel = function() {
			$mdDialog.cancel();
		};

		$scope.add = function(newPerformer) {
			$mdDialog.hide(newPerformer);
		};

	}]);