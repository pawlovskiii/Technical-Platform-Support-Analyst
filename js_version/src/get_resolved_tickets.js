function get_resolved_tickets_for_today(API_KEY, URL, Request) {
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

exports.get_resolved_tickets_for_today = get_resolved_tickets_for_today;
