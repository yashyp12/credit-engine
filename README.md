# Credit Engine Service 🚀

A lightweight API that issues and tracks “thank-you” credits for every ecosystem interaction—tech modules, social posts, referrals, spend multipliers, coffee-wall actions, and more.

---

## 🔗 Live Demo

🌐 [Deployed API (Render)](https://credit-engine-wfq5.onrender.com)

---

## 🧩 Available Endpoints

### ▶️ Enroll User

**POST** `/api/enroll`

**Body JSON:**
```json
{
  "userId": "string",
  "actionType": "string",
}
