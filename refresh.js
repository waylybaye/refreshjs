$.getJSON('http://localhost:{{ port }}/poll?callback=?', function(json){
  if( json.changed ){ window.location.reload(); }
});
