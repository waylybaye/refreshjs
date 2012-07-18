(function(window, undefined){
  var is_requesting = false;

  function pollingChange(){
    if(window.jQuery){
      $.getJSON('http://localhost:{{ port }}/poll?callback=?', function(json){
        if( json.changed ){ window.location.reload(); }
        pollingChange();
      });
      is_requesting = true;
    }
  }
  setInterval(function(){
    if( !is_requesting ){
      pollingChange();
    }
  }, 100);
})(window);
