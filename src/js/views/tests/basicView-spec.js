define(
    [
        'backbone',
        'constants',
        'basicModel',
        'basicView'
    ],
    function (
        Backbone,
        constants,
        BasicModel,
        BasicView
    ) {
        'use strict';

        var PROPERTIES = constants.basic.properties;

        describe('Basic view', function() {
           var view;

            describe('On initialize', function() {


                it('should inherit from Backbone.View', function() {
                    expect(true).toBe(true);
                });
            });
        });
    }
);
