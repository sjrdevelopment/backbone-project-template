define(['backbone', 'constants'], function(Backbone, constants) {

    var PROPERTIES = constants.basic.properties,
        BasicModel;

    BasicModel = Backbone.Model.extend({

        initialize: function(attr, options) {

        }

    });

    return BasicModel;
});