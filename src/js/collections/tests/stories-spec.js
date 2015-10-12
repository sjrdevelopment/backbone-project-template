define(
    [
        'backbone',
        'constants',
        'storiesCollection'
    ],
    function (
        Backbone,
        constants,
        StoriesCollection
    ) {
        'use strict';

        var PROPERTIES = constants.story.properties;

        describe('Story collection', function() {
           var collection;

            describe('On initialize', function() {

                beforeEach(function() {
                    collection = new StoriesCollection();
                });

                it('should inherit from Backbone.Model', function() {
                    expect(collection instanceof Backbone.Collection).toBe(true);
                });
            });
        });
    }
);
