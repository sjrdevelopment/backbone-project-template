require([
    'jquery',
    'backbone',
    'basicView',
    'basicModel',
    'basicCollection',
    'constants'
], function (
    $,
    Backbone,
    BasicView,
    BasicModel,
    BasicCollection,
    constants
) {
    var stories,
        showError,
        GENERIC_CLASSES = constants.genericClasses,
        GENERIC_EVENTS = constants.genericEvents,
        GENERIC_SELECTORS = constants.genericSelectors,
        $html = $('html'),
        $body = $('body');

    Backbone.history.start();

    var newView = new BasicView({
        model: new BasicModel({
            itemName: 'stu'
        })
    });
    newView.render();
});