# **Everything Green Limited - Backend Developer Task**

This is a backend application built with **Next.js** and **MongoDB** to fulfill the technical task for the Backend Developer position at Everything Green Limited. The application includes API routes for user management and a webhook endpoint.

---

## **Features**
1. **User Management API**:
   - `GET /api/users`: Fetch all users.
   - `POST /api/users`: Create a new user (name, email, password).
   - `GET /api/users/:id`: Fetch a single user by ID.
   - **JWT Authentication**: Secures API routes.

2. **Webhook Endpoint**:
   - `POST /api/webhook`: Processes incoming webhook requests, validates the payload, and stores the data in `db.json`.

---

## **Technologies Used**
- **Next.js**: Framework for building the API routes.
- **MongoDB**: Database for storing user data.
- **Mongoose**: MongoDB object modeling for Node.js.
- **JWT (JSON Web Tokens)**: For authentication.
- **ESLint**: For code linting and consistency.

---

## **Setup Instructions**

### **Prerequisites**
1. **Node.js**: Ensure Node.js is installed on your machine. Download it from [here](https://nodejs.org/).
2. **MongoDB**: Set up a MongoDB database. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a free cloud database.

### **Steps to Run the Project**
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/everything-green-backend.git
   cd everything-green-backend

   Install Dependencies:

bash
Copy
npm install
Set Up Environment Variables:
Create a .env file in the root directory and add the following variables:

env
Copy
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
Run the Development Server:

bash
Copy
npm run dev
Access the Application:

The API will be available at http://localhost:3000/api.

Use tools like Postman or Thunder Client to test the endpoints.

API Documentation
1. User Management API
Fetch All Users
Endpoint: GET /api/users

Description: Fetches all users from the database.

Response:

json
Copy
[
  {
    "_id": "64f1b2c8e4b0f5a2f8e7e1a2",
    "name": "John Doe",
    "email": "john@example.com",
    "password": "hashed_password"
  }
]
Create a New User
Endpoint: POST /api/users

Description: Creates a new user with name, email, and password.

Request Body:

json
Copy
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
Response:

json
Copy
{
  "user": {
    "_id": "64f1b2c8e4b0f5a2f8e7e1a2",
    "name": "John Doe",
    "email": "john@example.com",
    "password": "hashed_password"
  },
  "token": "jwt_token"
}
Fetch a Single User by ID
Endpoint: GET /api/users/:id

Description: Fetches a single user by their ID.

Response:

json
Copy
{
  "_id": "64f1b2c8e4b0f5a2f8e7e1a2",
  "name": "John Doe",
  "email": "john@example.com",
  "password": "hashed_password"
}
2. Webhook Endpoint
Process Webhook Request
Endpoint: POST /api/webhook

Description: Processes incoming webhook requests and stores the data in db.json.

Request Body:

json
Copy
{
  "eventType": "user.created",
  "data": {
    "userId": "64f1b2c8e4b0f5a2f8e7e1a2",
    "email": "john@example.com"
  }
}
Response:

json
Copy
{
  "success": true,
  "message": "Received"
}
Project Structure
Copy
src/
├── lib/               # Utility functions and helpers
├── middleware/        # Custom middleware
├── models/            # Database models
├── pages/             # API routes and pages
└── public/            # Static assets
Running Tests
To lint the code using ESLint, run:

bash

npm run lint
Contributing
Fork the repository.

Create a new branch: git checkout -b feature/your-feature-name.

Commit your changes: git commit -m "Add some feature".

Push to the branch: git push origin feature/your-feature-name.

Submit a pull request.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contact
For any questions or feedback, please reach out to:

Abul Ala Jobayar

Email: abulalajobayar@gmail.com

GitHub: [abulalajobayar](https://github.com/AbulAlaJobayar)



---

### **How to Use**
1. Copy the above content.
2. Create a new file named `README.md` in your GitHub repository.
3. Paste the content into the file.
4. Commit and push the changes.

Let me know if you need further assistance! 😊
