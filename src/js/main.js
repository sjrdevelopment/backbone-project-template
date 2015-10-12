require([
    'jquery',
    'backbone',
    'storyView',
    'storyModel',
    'storiesCollection',
    'constants'
], function (
    $,
    Backbone,
    StoryView,
    StoryModel,
    StoriesCollection,
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


});