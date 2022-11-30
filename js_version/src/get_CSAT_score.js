const unirest = require('unirest');

function get_CSAT_score_for_today(API_KEY, DOMAIN) {
	const URL = `https://${DOMAIN}.freshdesk.com/api/v2/surveys/satisfaction_ratings?created_since=2022-11-23T00:00:01Z`;
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
}

exports.get_CSAT_score_for_today = get_CSAT_score_for_today;
