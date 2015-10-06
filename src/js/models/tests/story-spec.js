define(
    [
        'backbone',
        'constants',
        'storyModel'
    ],
    function (
        Backbone,
        constants,
        StoryModel
    ) {
        'use strict';

        var PROPERTIES = constants.story.properties;

        describe('Story model', function() {
           var model;

            describe('On initialize', function() {

                beforeEach(function() {
                    model = new StoryModel({}, {
                        newModel: true
                    });
                });

                it('should inherit from Backbone.Model', function() {
                    expect(model instanceof Backbone.Model).toBe(true);
                });
            });
        });
    }
);
