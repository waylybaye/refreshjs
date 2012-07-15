$.getJSON('http://localhost:1127/poll?callback=?', function(json){
  if( json.changed ){ window.location.reload(); }
});
