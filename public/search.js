// var myHeaders = new Headers({
//   'Accept': 'application/json',
//   'x-macys-webservice-client-id': '43df9atwexpv8mcuh64t3buj'
// });

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.macys.com/v4/catalog/search?searchphrase=red",
  "method": "GET",
  "headers": {
    "accept": "application/json",
    "x-macys-webservice-client-id": "9m5dm82faq6s4t76sqxvd9k3",
    "cache-control": "no-cache",
    "postman-token": "48e82e49-b3b6-b3f0-d378-4c891ec132b8"
  }
};


$(document).ready(function(){
  $('input').change(function(e){
    console.log(e.target.value);
    $.ajax(settings).done(function (response) {
      console.log(response);
    });
    // $.ajax({
    //   // "async": true,
    //   // "crossDomain": true,
    //   // "url": "http://api.qa14codemacys.fds.com/v4/catalog/search?searchphrase=red",
    //   // "method": "GET",
    //   // "headers": {
    //   //   "x-macys-webservice-client-id": "43df9atwexpv8mcuh64t3buj",
    //   //   "accept": "application/json",
    //   //   "cache-control": "no-cache",
    //   //   "postman-token": "d2719d4f-548a-2d8e-7409-70c61dc31ecf"
    //   // }
    //   // host: 'http://api.qa14codemacys.fds.com',
    //   // path: '/v4/catalog/search?searchphrase=red',
    //   type: 'GET',
    //   // beforeSend: function (xhr) {
    //   //     xhr.setRequestHeader ("Authorization", "Basic " + btoa("chrisvh" + ":" + "chrisiscool1"));
    //   // },
    //   // contentType: 'application/json',
    //   headers: {
    //     'Accept': 'application/json',
    //     'X-Macys-Webservice-Client-Id': '9m5dm82faq6s4t76sqxvd9k3'
    //     // 'X-Originating-Ip': '11.142.231.255'
    //   },
    //   // url: 'http://api.qa14codemacys.fds.com/v4/catalog/search?searchphrase=red',
    //   url: 'https://api.macys.com/v4/catalog/search?searchphrase=red',
    //   // crossDomain: true,
    //   // dataType: 'jsonp',
    //   // jsonp: false,
    //   success: function(data) {
    //       console.log(data);
    //   },
    //   error: function(err){
    //     console.log(err);
    //   }
    //   //download node cli, follow heroku information
    //   // node use strict server js, after getting heroku
    // });
    // fetch('http://api.qa14codemacys.fds.com/v4/catalog/search?searchphrase=red', {
    //   'dataType': 'jsonp',
      // headers: {
      //   'Accept': 'application/json',
      //   'x-macys-webservice-client-id': '43df9atwexpv8mcuh64t3buj',
      //   'Access-Control-Allow-Origin': '*'
      // }
    //   // headers: myHeaders
    // }).then(function(response) {
    // 	console.log(response);
    // }).catch(function(err) {
    // 	console.log(err);
    // });
  });
});
