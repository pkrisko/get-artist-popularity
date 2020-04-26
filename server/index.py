import json
import os
import urllib3
import base64

http = urllib3.PoolManager()
CLIENT_ID = os.environ['CLIENT_ID']
CLIENT_SECRET = os.environ['CLIENT_SECRET']

def get_token():
    id_and_secret = f'{CLIENT_ID}:{CLIENT_SECRET}'
    authorization = base64.b64encode(id_and_secret.encode('utf-8'))
    token_r = http.request(
        'POST',
        'https://accounts.spotify.com/api/token',
        headers={
            'Authorization': f'Basic {authorization.decode()}',
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body='grant_type=client_credentials'
    )
    token_response = json.loads(token_r.data.decode())
    return token_response['access_token']

def get_artist(artist_id):
    access_token = get_token()
    artist_r = http.request(
        'GET',
        f'https://api.spotify.com/v1/artists/{artist_id}',
        headers={ 'Authorization': f'Bearer {access_token}' },
    )
    return json.loads(artist_r.data.decode())

def lambda_handler(event, context):
    artist_id = event['queryStringParameters']['artist_id']
    artist_response = get_artist(artist_id)
    return {
        'statusCode': 200,
        'body': json.dumps(artist_response)
    }
