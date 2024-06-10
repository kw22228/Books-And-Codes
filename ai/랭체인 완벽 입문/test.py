import os
import openai

openai_api_key = os.getenv('OPENAI_API_KEY')

if openai_api_key is None:
    raise ValueError('API key is not set')

openai.api_key = openai_api_key

try:
    response = openai.Model.list()
    print('API key is valid')
    print('Models available: ', response['data'])

except openai.error.AuthenticationError:
    print('API key is invalid')

except openai.error.OpenAIError as e:
    print(f"OpenAI API Error: {e}")