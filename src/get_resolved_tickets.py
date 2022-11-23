import requests
import json


def get_resolved_tickets_for_today(DOMAIN, API_KEY, PASSWORD):

    r = requests.get(
        f'https://{DOMAIN}.freshdesk.com/api/v2/search/tickets?query="status:4%20AND%20due_by:"2022-11-23""',
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
