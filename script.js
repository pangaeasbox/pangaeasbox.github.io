
var travel = function() {
// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.airtable.com/v0/appybL1OJaEEIvAdS/Books?api_key=keymAugpaEvXsyGBr', true);

request.onload = function ()   {
  var data = JSON.parse(this.response);
  var choices = data.records.length;
  var selection = Math.floor(Math.random() * choices); 

  var author = data.records[selection].fields.Author;
  var title = data.records[selection].fields.Title;
  var country = data.records[selection].fields.Country;

  document.querySelector('h2').innerHTML = country;
  document.querySelector('h1').innerHTML = title;
  document.querySelector('h3').innerHTML = author;
}
// Send request
request.send();  
}
