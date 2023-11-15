var express = require('express');
const hubspot = require('@hubspot/api-client');
require('dotenv').config();

var mainjs = require('js/main.js');
console.log(typeof mainjs.foo); // => 'function'
console.log(typeof mainjs.bar); // => 'function'

// Set Private App ACCESS_TOKEN as environment variables before running.
if (!process.env.ACCESS_TOKEN) {
  throw new Error('Missing ACCESS_TOKEN environment variable.')
}
const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

//=============================================================================//
//   Using Private App Access Token to configure HubSpot API Client instance   //
//=============================================================================//
const hubspotClient = new hubspot.Client({ accessToken: ACCESS_TOKEN });

var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname));

// views is directory for all template files
app.set('views', __dirname + '/html');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  var tagline = "Testing out a passed variable";

  response.render('pages/index', {
    tagline: tagline,
    accesstoken: ACCESS_TOKEN
  });
});
app.get('/about', function(request, response) {
  response.render('pages/about');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


// This file is what handles incoming requests and
// serves files to the browser, or executes server-side code
