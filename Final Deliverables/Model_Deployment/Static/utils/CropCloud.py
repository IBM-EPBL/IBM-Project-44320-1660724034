import requests
import numpy as np
import json



def call_cloud(N,P,K,temp,hum,ph,rainfall):
    # NOTE: you must manually set API_KEY below using information retrieved from your IBM Cloud account.
    API_KEY = "y8B8PYY1mllrgTdHL5WA4RAR91pFtksQUfikoKEfsQF3"
    token_response = requests.post('https://iam.cloud.ibm.com/identity/token', data={"apikey":
    API_KEY, "grant_type": 'urn:ibm:params:oauth:grant-type:apikey'})
    mltoken = token_response.json()["access_token"]

    # NOTE: manually define and pass the array(s) of values to be scored in the next line
    payload_scoring = {"input_data": [{"fields": [['N','P','K','temperature','humidity','ph','rainfall']], "values": [[N,P,K,temp,hum,ph,rainfall],[90,42,43,20.87,82.00,6.50,202.935]]}]}

    response_scoring = requests.post('https://us-south.ml.cloud.ibm.com/ml/v4/deployments/330990ac-8862-4551-9757-075961d00eed/predictions?version=2022-11-09', json=payload_scoring,
 headers={'Authorization': 'Bearer ' + mltoken})
    prediction=response_scoring.json()
    print(response_scoring.json())
    return prediction['predictions'][0]['values'][0][0]

call_cloud(90,42,43,20.87,82.00,6.50,202.935)