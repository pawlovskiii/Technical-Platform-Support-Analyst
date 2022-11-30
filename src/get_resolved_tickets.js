const unirest = require('unirest');

const API_KEY = 'W28pTo26fhCgwzze6O9b';
const DOMAIN = 'zoovu';
const URL = `https://${DOMAIN}.freshdesk.com/api/v2/search/tickets?query="status:4%20AND%20due_by:"2022-11-23""`;

const Request = unirest.get(URL);

Request.auth({
	user: API_KEY,
	pass: 'X',
	sendImmediately: true,
}).end(function (response) {
	console.log(response.body);
	if (response.status != 200) {
		console.log('X-Request-Id :' + response.headers['x-request-id']);
	}
});
