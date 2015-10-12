require.config({

    paths: {
        // libs
        "jquery": "../bower_components/jquery/dist/jquery.min",
        "underscore": "../bower_components/underscore/underscore-min",
        "backbone": "../bower_components/backbone/backbone-min",
        "handlebars": "../bower_components/handlebars/handlebars.min",
        "requirejs": "../bower_components/requirejs/require",
        "text": "../bower_components/requirejs-text/text",

        // constants
        "constants": "js/constants/modelViewConstants",

        // components
        "basicCollection": "js/collections/basicCollection",
        "basicModel": "js/models/basicModel",
        "basicView": "js/views/basicView"
     },

    deps: [
        'jquery'
    ],

    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            'exports': 'backbone'
        }
    },

    hbars: {
        extension: '.hbs'
    }

});