(function() {
    'use strict';

    window.LiveReloadOptions = { host: 'localhost' };
    
    var liveReloadScriptTag = document.createElement('script');
    liveReloadScriptTag.type = 'text/javascript';
    liveReloadScriptTag.src = 'http://localhost:35729/livereload.js';

    document.body.appendChild(liveReloadScriptTag);
    
    console.log('Injected livereload.js');
})();