# Salting SDK — Secure API Proxy Without a Backend

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[Salting](https://salting.io) lets you call private APIs securely from frontend code — no backend required. Your API keys are encrypted server-side and never exposed in the browser or build artifacts.

- Zero backend setup — get a secure endpoint in under a minute
- End-to-end encrypted — keys never touch the browser
- CORS handled automatically
- DDoS protection at the edge
- 34+ edge regions, <50ms global latency
- 99.99% uptime SLA

## The Problem Salting Solves

```javascript
// ❌ Insecure — key exposed in the browser
const data = await fetch('https://api.stripe.com/v1/prices', {
  headers: { 'Authorization': 'Bearer sk_live_...' }
});

// ✅ Secure — key hidden, headers injected by Salting
const data = await fetch('https://api.salting.io/r/your-bridge-uuid?limit=10');
```

## Quick Start

### 1. Create a secure endpoint

1. Go to [salting.io](https://salting.io)
2. Paste your API key or endpoint URL
3. Get your unique Bridge UUID

### 2. Make a secure request

```javascript
// Replace any direct API call with your Salting bridge URL
const response = await fetch('https://api.salting.io/r/your-bridge-uuid', {
  method: 'GET'
});

const data = await response.json();
console.log(data);
```

## Examples

### React — hide OpenAI key

```javascript
// ❌ Before: key exposed in bundle
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  headers: { 'Authorization': 'Bearer sk-...' },
  body: JSON.stringify({ model: 'gpt-4', messages })
});

// ✅ After: key hidden by Salting
const response = await fetch('https://api.salting.io/r/your-bridge-uuid', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ model: 'gpt-4', messages })
});
```

### No-code tools (Retool, Bubble, Webflow)
