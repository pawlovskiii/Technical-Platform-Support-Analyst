const {
	get_resolved_tickets_for_today,
} = require('./src/get_resolved_tickets');
const unirest = require('unirest');

function main() {
	const API_KEY = 'W28pTo26fhCgwzze6O9b';
	const DOMAIN = 'zoovu';
	const URL = `https://${DOMAIN}.freshdesk.com/api/v2/search/tickets?query="status:4%20AND%20due_by:"2022-11-23""`;
	const Request = unirest.get(URL);

	get_resolved_tickets_for_today(API_KEY, URL, Request);
}

main();
