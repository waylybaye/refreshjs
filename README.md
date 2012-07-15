refreshjs
=========

refreshjs is a small tool which refresh the browser automatically when watched files changeed.


Quick Start
-----------
Start the watcher and web server:

    $ refreshjs --watch static --port 1117

include the refresh.js in your html files:

    <script type='text/javascript' defer='true' src='http://localhost:1117/refresh.js'></script>

Done!
