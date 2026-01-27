# 🌐 VibeNews Backend API (Advanced MERN Stack)

This is a robust, production-grade backend API built for the **VibeNews** platform. It manages secure user authentication, complex news categorization, and automated professional email notifications using TypeScript and Node.js.

---

## 🛠 Tech Stack & Icons
* ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white) **Core Language**
* ![NodeJS](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) **Runtime Environment**
* ![ExpressJS](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) **Web Framework**
* ![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white) **Database (NoSQL)**
* ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white) **Secure Authentication**
* ![Resend](https://img.shields.io/badge/Resend-000000?style=for-the-badge&logo=resend&logoColor=white) **Professional Email API**

---

## 📸 Technical API Documentation (Tested via Thunder Client)

I have rigorously tested all core endpoints to ensure 100% reliability and security. Below are the verified responses from the development environment:

### 🔐 1. User Authentication System
* **User Sign-Up Success:** Handles new user registration with secure data validation.
    > ![Sign-Up Response](Insert_Your_Signup_Image_Link_Here)
* **User Login Response:** Generates encrypted JWT tokens for secure session management.
    > ![Login Response](Insert_Your_Login_Image_Link_Here)

### 📰 2. Content & News Management
* **Create Product/News:** Admin-level API to add news articles directly to MongoDB.
    > ![Create News](Insert_Your_Product_Create_Image_Link_Here)
* **Get All Products:** Highly optimized retrieval system with category-based filtering.
    > ![Get News](Insert_Your_Product_Get_Image_Link_Here)

### ✉️ 3. Communication & Inquiries
* **Contact Form Submission:** Efficiently captures user inquiries and stores them.
    > ![Contact Message](Insert_Your_Contact_Image_Link_Here)
* **Email Notification:** Instant email trigger via **Resend API** to notify the admin.
    > ![Email Proof](Insert_Your_Email_Proof_Image_Link_Here)

---

## 🚀 Key Architectural Features
1.  **MVC Pattern:** Cleanly separated Models, Views, and Controllers for maximum scalability.
2.  **Environment Protection:** All sensitive credentials (Mongo URI, API Keys) are secured via `.env` files.
3.  **Type Safety:** Built with 100% TypeScript to eliminate runtime errors and improve code quality.
4.  **Security Middleware:** Implemented CORS and secure headers for safe cross-origin communication.

---

## 🔗 Live Deployment
🌍 **Backend Live URL:** [Click Here to View API](Your_Railway_Link_Here)

## ⚙️ How to Setup Locally
1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Setup your `.env` file:
   ```env
   PORT=9000
   MONGO_URI=your_mongodb_uri
   RESEND_API_KEY=your_resend_key
   JWT_SECRET=your_secret_key