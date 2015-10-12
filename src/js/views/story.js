define([
    'jquery',
    'backbone',
    'handlebars',
    'text!hbs/story-template.hbs',
    'constants'
],function(
    $,
    Backbone,
    Handlebars,
    mainTemplate,
    constants
) {

    var GENERIC_CLASSES = constants.genericClasses,
        GENERIC_EVENTS = constants.genericEvents,
        GENERIC_SELECTORS = constants.genericSelectors,
        CSS_CLASSES = constants.story.cssClasses,
        PROPERTIES = constants.story.properties,
        storyView,
        $html,
        $body;

    storyView = Backbone.View.extend({
        tagName: 'div',

        className: CSS_CLASSES.storyRow,

        events: {
            'click .action': 'onAction',
        },

        initialize: function() {
            $html = $('html');
            $body = $('body');

            this.listenTo(this.model.on('change', this.render.bind(this)));
            this.listenTo(this.model.on('destroy', _.bind(this.removeView, this)));
            this.model.on('change', _.bind(this.render, this));
        },

        removeView: function() {
            this.remove();
        },

        onAction: function(event) {
            alert('View event fired');
        },

        mainTemplate:  Handlebars.compile(mainTemplate),

        render: function() {
            this.$el.html(this.mainTemplate(this.model.attributes));
            $body.append(this.$el);

            return this;
        }

    });

  return storyView;

});