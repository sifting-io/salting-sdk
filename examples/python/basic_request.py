"""
Salting API — Python example
Call any private API securely without a backend.

Docs: https://salting.io/docs
Get started: https://salting.io
"""

import requests

BRIDGE_URL = "https://api.salting.io/r/your-bridge-uuid"


def secure_get(params: dict = {}):
    """
    Secure GET request via Salting bridge.
    
    Args:
        params: query parameters, e.g. {"limit": "10"}
    """
    response = requests.get(BRIDGE_URL, params=params)
    response.raise_for_status()
    return response.json()


def secure_post(body: dict = {}):
    """
    Secure POST request via Salting bridge.

    Args:
        body: request body, e.g. {"model": "gpt-4", "messages": [...]}
    """
    response = requests.post(BRIDGE_URL, json=body)
    response.raise_for_status()
    return response.json()


if __name__ == "__main__":
    # GET — e.g. Stripe prices
    prices = secure_get(params={"limit": "10"})
    print("Prices:", prices)

    # POST — e.g. OpenAI chat
    chat = secure_post(body={
        "model": "gpt-4",
        "messages": [
            {"role": "user", "content": "Hello!"}
        ]
    })
    print("Chat:", chat)
