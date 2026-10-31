# Experiment 10: HTML Form Request Handling using Node.js and MongoDB

**Course:** Web Technology Laboratory  
**Register Number:** URK24CS1158  
**Student Name:** Gautham Manoj  
**Date of Exercise:** 09.09.2026  
**GitHub Host Link:** [https://gautham75.github.io/Web-Technology-Lab/](https://gautham75.github.io/Web-Technology-Lab/)

---

## 🎯 Aim
To develop a server-side application using Node.js to handle HTML form submissions, validate user registration details, store the submitted data in MongoDB, and retrieve and display the details in a formatted table.

---

## 🛠️ Technologies Used
- **Node.js**: Built-in `http`, `fs`, and `path` modules (no heavy web framework required).
- **MongoDB**: Official Node.js driver (`mongodb` v6.8.0).
- **HTML5 & CSS3**: Responsive registration form with client-side & server-side validation.

---

## 📁 Project Structure

```
Ex10/
├── app.js               # Node.js HTTP server, MongoDB connection, routing, and HTML table renderer
├── home.html            # Registration form frontend with HTML5 validation
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Exact dependency tree
└── README.md            # Documentation and execution instructions
```

---

## ⚙️ Application Workflow & Features

1. **User Registration Form (`home.html`)**:
   - **Fields**: Name, Password, Age, Mobile Number, Email, Gender (Radio buttons), State (Dropdown select), and Skills (Checkboxes).
   - **Client-Side Validation**:
     - Name: `pattern="[A-Za-z\s]{2,50}"`
     - Password: `minlength="6"`
     - Age: `min="1"` and `max="120"`
     - Mobile Number: `pattern="[0-9]{10}"`
     - Email: HTML5 email format validation
     - Skills: JavaScript validation ensuring at least one skill checkbox is checked.

2. **HTTP Server (`app.js`)**:
   - Listens on port `7000` (avoids browser-restricted ports like 6000).
   - **Route `GET /`**: Streams and serves `home.html`.
   - **Route `POST /server`**:
     - Accumulates chunks from the incoming request stream.
     - Parses URL-encoded form data using `URLSearchParams`.
     - Validates mandatory fields on the server side.
     - Connects to MongoDB (`mongodb://127.0.0.1:27017`).
     - Inserts the record into the database `mydb`, collection `users`.
     - Queries MongoDB using `findOne` with the returned `insertedId` to verify persistence.
     - Dynamically renders an HTML page displaying the user details in a clean, bordered table.

---

## 🚀 How to Run Locally

### 1. Prerequisites
- Ensure **Node.js** (v18+) is installed:
  ```bash
  node -v
  ```
- Ensure **MongoDB** is running locally on default port `27017`:
  ```bash
  mongod
  ```
  *(or verify connection via MongoDB Compass at `mongodb://127.0.0.1:27017`)*

### 2. Install Dependencies
Navigate into the `Ex10` directory and install the required MongoDB driver:
```bash
cd Ex10
npm install
```

### 3. Start the Server
```bash
node app.js
```

### 4. Access the Application
Open your web browser and navigate to:
```
http://localhost:7000
```

---

## 📄 Database Record Schema

```json
{
  "_id": "ObjectId('67... ')",
  "name": "Gautham Manoj",
  "password": "secretpassword",
  "age": 20,
  "mobile": "9923457891",
  "email": "gautham@example.com",
  "gender": "Male",
  "state": "Kerala",
  "skills": ["Java Script", "Python", "C++"],
  "submittedAt": "2026-10-31T04:45:00.000Z"
}
```

---

## 👤 Author
- **Gautham Manoj** ([@gautham75](https://github.com/gautham75))
- **Register Number**: URK24CS1158
- **Course**: Web Technology Laboratory
