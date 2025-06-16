# Credit Engine Service 🚀

A lightweight API that issues and tracks “thank-you” credits for every ecosystem interaction—tech modules, social posts, referrals, spend multipliers, coffee-wall actions, and more.

---

## 🔗 Live Demo

🌐 [Deployed API (Render)](https://credit-engine-wfq5.onrender.com)

---

## 🧠 Logic Summary

Credits =  
`BaseCredits (10)` + `0.1 * Spend`  
All credits are stored in-memory for this prototype version.

---

## 🚀 API Endpoints

### 1. Enroll User

**POST** `/api/enroll`  
Enrolls a user and calculates credits.

#### Request Body
```json
{
  "userId": "user123",
  "actionType": "referral",
  "referrerId": "ref123",
  "spend": 200
}

 # Responce
{
  "message": "User enrolled",
  "credits": 90
}
```
2. Get User Credits
GET /api/credits/:userId
Fetches the total credits of the specified user.

Example
GET /api/credits/user123

🛠️ How to Run Locally
Clone the repo:

 #Fork 
git clone https://github.com/<your-username>/credit-engine.git
cd credit-engine
Install dependencies:

# Install Modules
npm install
 

# To Run - 
npm start

Server will run on:

http://localhost:3000

🧪 Testing with Postman
Use POST to /api/enroll with raw JSON body (as above)

Use GET to /api/credits/:userId


# Author
Name: Yash Patil 

Email: patilyashyp12@gmail.com

GitHub: @yashyp12
