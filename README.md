# Credit Engine Service

A lightweight backend API built using **Node.js** and **Express.js** to issue and track "thank-you" credits based on user interactions, spends, and referrals.

---

## 🧩 Features

- `POST /api/enroll`: Enroll a user and calculate credits
- `GET /api/credits/:userId`: Fetch current credit balance for a user
- In-memory data store (no external DB required)
- Payload validation with custom logic
- Modular structure (routes, services, utils)

---

