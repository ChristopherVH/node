
$(document).ready(function(){
  $('input').change(function(e){
    console.log(e.target.value);
    fetch('https://api.macys.com/v4/catalog/search?searchphrase=' + e.target.value, {
    	method: 'get',
      accept: 'application/json',
      'x-macys-webservice-client-id': '43df9atwexpv8mcuh64t3buj'
    }).then(function(response) {
    	console.log(response);
    }).catch(function(err) {
    	// Error :(
    });
  });
});
