define(
    function() {
        'use strict';

        return {
            apiBaseUrl: 'http://localhost:3000',

            genericClasses: {
                overlayActive: 'overlay-active',
                overlayContent: 'overlay-content'
            },

            genericEvents: {
                closeOverlay: 'click.closeOverlay'
            },

            genericSelectors: {
                overlay: '.overlay',
                board: '.board',
                addStoryButton: '.add-story-button'
            },

            basic: {
                properties: {
                    apiUrl: ''
                },
                cssClasses: {
                    container: 'container'
                }
            }
        };
    }
);