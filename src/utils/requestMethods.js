const { constants } = require("crypto");
const express = require("express");
const app = express();
const qs = require('querystring');

// (function getFormInputs (request, response) {

// 	if (request.method == 'POST') {
// 			let body = '';

// 			request.on('data', function (data) {
// 					body += data;

// 					// Too much POST data, kill the connection!
// 					// 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
// 					if (body.length > 1e6)
// 							request.connection.destroy();
// 			});

// 			request.on('end', function () {
// 					var post = qs.parse(body);
// 					// use post['blah'], etc.
// 			});
// 	}

// 	console.log(post);

// })();

fetch('/', {
	method: 'POST',
	headers: {
			'Content-Type': 'application/json'
	},
	body: JSON.stringify({
			user: {
					name: "John",
					email: "john@example.com"
			}
	})
});

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});

const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.post("/", function (req, res) {
    console.log(req.body.user.name)
});

