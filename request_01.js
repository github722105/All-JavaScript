// Sample Node.js program using request module.

var request = require("request");
request("http://www.sitepoint.com", function(error, response, body) {console.log(body)});
