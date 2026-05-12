/**
 * Salting API — Basic request example
 * Call any private API securely without a backend.
 *
 * Docs: https://salting.io/docs
 * Get started: https://salting.io
 */

const BRIDGE_URL = "https://api.salting.io/r/your-bridge-uuid";

// GET request
async function secureGet(params = {}) {
  const url = new URL(BRIDGE_URL);
  Object.entries(params).forEach(([k, v]) => url.searchParams.append(k, v));

  const response = await fetch(url.toString());

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

// POST request
async function securePost(body = {}) {
  const response = await fetch(BRIDGE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

// Examples
async function main() {
  // GET — e.g. Stripe prices
  const prices = await secureGet({ limit: "10" });
  console.log("Prices:", prices);

  // POST — e.g. OpenAI chat
  const chat = await securePost({
    model: "gpt-4",
    messages: [{ role: "user", content: "Hello!" }],
  });
  console.log("Chat:", chat);
}

main().catch(console.error);
