import requests


def call_cloud(state: object, year: object, month: object, max: object, min: object, mean: object, preceptions: object, pressure: object, wind: object) -> object:
    # NOTE: you must manually set API_KEY below using information retrieved from your IBM Cloud account.
    API_KEY: str = "y8B8PYY1mllrgTdHL5WA4RAR91pFtksQUfikoKEfsQF3"
    token_response = requests.post('https://iam.cloud.ibm.com/identity/token', data={"apikey":
    API_KEY, "grant_type": 'urn:ibm:params:oauth:grant-type:apikey'})
    mltoken = token_response.json()["access_token"]

    header = {'Content-Type': 'application/json', 'Authorization': 'Bearer ' + mltoken}

    # NOTE: manually define and pass the array(s) of values to be scored in the next line
    array_of_input_fields = ["SUBDIVISION", "YEAR", "MONTH", "MAX_TEMP", "MIN_TEMP", "MEAN_TEMP", "PRECEPTIONS",
                             "PRESSURE", "WIND_SPEED"]
    payload_scoring = {"input_data": [{"fields": [array_of_input_fields],
                                       "values": [[state, year, month, max, min, mean, preceptions, pressure, wind],
                                                  ["TAMIL NADU", 2022, 11, 10.68, 23.8, 17.21, 20.72, 94.2, 7.29]]}]}

    response_scoring = requests.post('https://us-south.ml.cloud.ibm.com/ml/v4/deployments/5abd7c89-2e4b-4391-8b8b-656d0c98d71a/predictions?version=2022-11-06',json=payload_scoring,
                                     headers={'Authorization': 'Bearer ' + mltoken})
    print("Scoring response")
    prediction = response_scoring.json()
    print(response_scoring.json())
    return prediction['predictions'][0]['values'][0][0]


print(call_cloud("TAMIL NADU", 2022, 11, 10.68, 23.8, 17.21, 20.72, 94.2, 7.29))


class RainCloud:
    pass