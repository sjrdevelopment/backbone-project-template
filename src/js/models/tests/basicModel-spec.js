define(
    [
        'backbone',
        'constants',
        'basicModel'
    ],
    function (
        Backbone,
        constants,
        BasicModel
    ) {
        'use strict';

        var PROPERTIES = constants.basic.properties;

        describe('Basic model', function() {
           var model;

            describe('On initialize', function() {

                beforeEach(function() {
                    model = new BasicModel()
                });

                it('should inherit from Backbone.Model', function() {
                    expect(model instanceof Backbone.Model).toBe(true);
                });
            });
        });
    }
);
