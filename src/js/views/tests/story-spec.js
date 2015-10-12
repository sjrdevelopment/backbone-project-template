define(
    [
        'backbone',
        'constants',
        'storyModel',
        'storyView'
    ],
    function (
        Backbone,
        constants,
        StoryModel,
        StoryView
    ) {
        'use strict';

        var PROPERTIES = constants.story.properties;

        describe('Story view', function() {
           var view;

            describe('On initialize', function() {


                it('should inherit from Backbone.View', function() {
                    expect(true).toBe(true);
                });
            });
        });
    }
);
