(function(window, undefined){
  if(window.jQuery){
    $.getJSON('http://localhost:{{ port }}/poll?callback=?', function(json){
      if( json.changed ){ window.location.reload(); }
    });
  }
})(window);
