angular.module("angularOnFire")
    .factory("performers", ["$firebase", function($firebase) {
        "use strict";
        var ref = new Firebase("https://glaring-heat-1328.firebaseio.com/");
        var performers = $firebase(ref.child("performers")).$asArray();

        var Performer = {
            all: performers,
            create: function(newPerformer) {
                return performers.$add(newPerformer);
            },
            get: function(id) {
                return performers.$getRecord(id);
            },
            update: function(performer) {
                return performers.$save(performer);
            },
            delete: function(performer) {
                return performers.$remove(performer);
            }
        };

        return Performer;

    }]);