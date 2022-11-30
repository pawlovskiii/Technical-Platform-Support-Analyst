from src.get_resolved_tickets import get_resolved_tickets_for_today
from src.get_CSAT_score import get_CSAT_score_for_today


def main() -> None:

    API_KEY = "W28pTo26fhCgwzze6O9b"
    DOMAIN = "zoovu"
    PASSWORD = "x"

    get_CSAT_score_for_today(DOMAIN, API_KEY, PASSWORD)
    get_resolved_tickets_for_today(DOMAIN, API_KEY, PASSWORD)


if __name__ == "__main__":
    main()
