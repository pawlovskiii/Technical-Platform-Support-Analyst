const {
	get_resolved_tickets_for_today,
} = require('./src/get_resolved_tickets');
const { get_CSAT_score_for_today } = require('./src/get_CSAT_score');

function main() {
	const API_KEY = 'W28pTo26fhCgwzze6O9b';
	const DOMAIN = 'zoovu';

	get_resolved_tickets_for_today(API_KEY, DOMAIN);
	get_CSAT_score_for_today(API_KEY, DOMAIN);
}

main();
