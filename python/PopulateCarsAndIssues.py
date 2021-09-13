import pandas as pd
from requests.auth import HTTPBasicAuth
import requests

APPSYNC_API_KEY = 'da2-4wfszu5ttvbvffr3o3bngo2qwm'
APPSYNC_API_ENDPOINT_URL = 'https://d47sv6jxljctvhursehgfq2d4a.appsync-api.ap-southeast-2.amazonaws.com/graphql'

def main(): 
  df = pd.read_csv('IssuesDB.csv')
  
  values = {"Make": "", "Model": "", "Year": -1, "PRA No.": 3, "": "", "Issue": "", "Description": ""}
  df.fillna(value=values)
  
  cars = {}

  # for i in range(len(df)):
  for i in range(5):
    make = df['Make'][i]
    model = df['Model'][i]
    year = int(df['Year'][i])
    
    if(make == "" or model == "" or year == ""): continue # ignore cars without make, model, or year
    
    #Check if car is already 
    car = f"('Make': {make}, 'Model': {model}, 'Year': {year})"
    if(car not in cars.keys()):
      cars[car] = ""
      
      carID = InsertCar(make, model, year)
      if(carID == None):
        print("Error inserting car!")
        break
      else: 
        cars[car] = carID
        
    # car will now always exist in the db, so we can now proceed to add the issue
    issueType = df['Issue'][i]
    issueDescription = df['Description'][i]
    pra = df['PRA No.'][i]
    
    if(issueType == "None"): continue #issues must have a type
    
    issueID = InsertIssue(carID, issueType, issueDescription, pra)
    if(issueID == None):
      print("Error inserting issue!")
      break
    
    
def InsertIssue(carID, issueType, issueDescription, PRA):
  request = f"mutation AddIssue($description: String = \"{issueDescription}\", $pra: String = \"{PRA}\", $type: String = \"{issueType}\", $issuesCarId: ID = \"{carID}\") {{createIssues(input: {{type: $type, description: $description, issuesCarId: $issuesCarId, PRA: $pra}}) {{id}}}}"
  response = SendGraphqlRequest(request)
  if(response == None): return None
  else: return response['createIssues']['id']
  

def InsertCar(make, model, year):
  request = f"mutation AddCar($year: Int = {year}, $model: String = \"{model}\", $make: String = \"{make}\") {{createCar(input: {{model: $model, year: $year, make: $make}}) {{id}}}}"
  response = SendGraphqlRequest(request)
  if(response == None): return None
  else: return response['createCar']['id']

def SendGraphqlRequest(request):
  auth = HTTPBasicAuth("apikey", "da2-4wfszu5ttvbvffr3o3bngo2qwm")
  headers = {
    'Content-Type': "application/graphql",
    'x-api-key': APPSYNC_API_KEY,
  }
  url = 'https://d47sv6jxljctvhursehgfq2d4a.appsync-api.ap-southeast-2.amazonaws.com/graphql'
  r = requests.post(url, json={'query': request}, headers=headers, auth=auth)
  if(r.status_code == 200):
    return r.json()['data']
  else:
    print(r.text)
    return None


main()
