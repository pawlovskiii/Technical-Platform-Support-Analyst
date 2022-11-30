import requests
import json


def get_CSAT_score_for_today(DOMAIN, API_KEY, PASSWORD) -> None:

    # CSAT% = (Number of positive responses / Total number of responses) x 100
    r = requests.get(
        f"https://{DOMAIN}.freshdesk.com/api/v2/surveys/satisfaction_ratings?created_since=2022-11-23T00:00:01Z",
        auth=(API_KEY, PASSWORD),
    )

    if r.status_code == 200:
        print("Request processed successfully, the response is given below")
        print(r.content)
    else:
        print("Failed to read tickets, errors are displayed below,")
        response = json.loads(r.content)
        print(response)

        print("x-request-id : " + r.headers["x-request-id"])
        print("Status Code : " + str(r.status_code))
