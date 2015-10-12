define(['backbone', 'constants'], function(Backbone, constants) {

    var PROPERTIES = constants.story.properties,
        storyModel;

    storyModel = Backbone.Model.extend({

        initialize: function(attr, options) {

        }

    });

    return storyModel;
});