$(document).ready( function() {
  $.ajax({
    url: 'http://json-server.devpointlabs.com/api/v1/users', 
    type: 'GET',
    dataType: 'JSON',
  }).done(function(users) {
      console.log(users)
    });
})