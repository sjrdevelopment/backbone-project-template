define(['backbone', 'basicModel', 'constants'], function(Backbone, BasicModel, constants) {

    var PROPERTIES = constants.basic.properties,
        BasicCollection;

    BasicCollection = Backbone.Collection.extend({
        model: BasicModel,

        url: constants.apiBaseUrl + PROPERTIES.apiUrl,

        parse: function(response) {

        }
    });

    return BasicCollection;
});