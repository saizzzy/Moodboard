import os
from openai import OpenAI

client = OpenAI(
    # We need an API key. We will do it.
    api_key=os.environ.get("OPENAI_API_KEY"),
)

response = client.responses.create(
    model="gpt-5.5",
    # Instructions - the message that invited by the system.
    instructions="You are a coding assistant that talks like a pirate.",
    # Input - the message that invited by the user.
    # It can be controlled by other thing in the code.S
    input="How do I check if a Python object is an instance of a class?",
)

print(response.output_text)