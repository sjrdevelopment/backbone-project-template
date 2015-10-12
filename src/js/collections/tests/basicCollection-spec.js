define(
    [
        'backbone',
        'constants',
        'basicCollection'
    ],
    function (
        Backbone,
        constants,
        BasicCollection
    ) {
        'use strict';

        var PROPERTIES = constants.basic.properties;

        describe('Basic collection', function() {
           var collection;

            describe('On initialize', function() {

                beforeEach(function() {
                    collection = new BasicCollection();
                });

                it('should inherit from Backbone.Model', function() {
                    expect(collection instanceof Backbone.Collection).toBe(true);
                });
            });
        });
    }
);
