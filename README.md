# 🌐 Web Technology Lab
<div align="center">

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://gautham75.github.io/Web-Technology-Lab/)
</div>
A comprehensive collection of **Web Technology Laboratory** experiments and exercises demonstrating modern HTML5 semantics, responsive layouts, advanced CSS3 styling techniques, interactive forms, jQuery, ReactJS frontend components, MongoDB Shell commands & Compass GUI operations, and Node.js + MongoDB backend development.

---

## 🚀 Live Demo

You can view the published website and live lab experiments hosted on GitHub Pages:  
👉 **[Web Technology Lab Showcase](https://gautham75.github.io/Web-Technology-Lab/)**

---

## 📚 Experiments Overview

| Exp No. | Experiment Title | Key Concepts & Technologies |
| :---: | :--- | :--- |
| **01** | **Lab Experiment 1** | HTML Basic Structure, Headings, Paragraphs, Lists, and Formatting Tags |
| **02** | **Lab Exercise 2** | HTML5 Semantic Elements, Media Integration (Audio, Video), and Forms |
| **03** | **Lab Exercise 3** | Responsive Layouts, CSS Grid & Flexbox, Custom Navigation & Media Queries |
| **04** | **Lab Exercise 4** | Advanced CSS3: Border Radius, Multiple Backgrounds, Gradients, Pseudo-Classes (`:focus`, `:required`, `:valid`, `:invalid`, `:nth-child`), and Sibling Selectors |
| **05** | **Lab Exercise 5** | DOM Manipulation & JavaScript Events |
| **06** | **Lab Exercise 6** | Digital Clock, Interactive DOM Elements & String/Math Operations |
| **07** | **Lab Experiment 7** | Working with jQuery: Budget Calculator, Cake Order Calculation & Car Body Workshop |
| **08** | **Lab Experiment 8** | Modern UI Design using ReactJS: Reusable Components, JSX, Props, State Hooks, Controlled Forms, Responsive CSS & Dark Mode |
| **09** | **Lab Experiment 9** | Working with MongoDB & MongoDB Compass: Shell Commands (`mongosh`), CRUD Operations, Query Filters, Sorting, Indexing & Aggregation Pipelines |
| **10** | **Lab Experiment 10** | HTML Form Request Handling using Node.js and MongoDB: Server-Side Processing, Data Validation, MongoDB Persistence & Record Display |

---

## 📁 Repository Structure

```directory
Web-Technology-Lab/
├── index.html                       # Main Laboratory Portal & Interactive Dashboard
├── README.md                        # Project Documentation
├── Ex10/                            # Experiment 10 Node.js & MongoDB Server Project
│   ├── app.js                       # HTTP Server & MongoDB Controller
│   ├── home.html                    # Registration Form Frontend
│   ├── package.json                 # Project Metadata & MongoDB Driver
│   └── README.md                    # Setup & Execution Instructions
├── Experiment 8/                    # Experiment 08 ReactJS Master Project Folder
│   ├── Experiment8_1/               # Student Lab Activity (Vite React Application)
│   ├── Experiment8_2/               # Additional Challenge (Full Featured Student Dashboard)
│   ├── README.md                    # React Project Documentation
│   └── WT LAB Experiment 8 1158.docx# Lab Record Document
├── Experiment 9/                    # Experiment 09 MongoDB & Compass Project
│   ├── queries.mongodb.js           # Full mongosh script (CRUD, Filters, Aggregations)
│   ├── students.json                # Complete dataset with 19 student documents
│   ├── mongodb_compass_experiment9.png # MongoDB Compass GUI Verification Screenshot
│   ├── README.md                    # Detailed Query Guide & Documentation
│   └── WT LAB Experiment 9 1158.docx# Lab Record Document
├── LAB experiments/
│   ├── Lab-Experiment 10.html       # Experiment 10 Interactive Portal & Demo
│   ├── Lab-Experiment 9.html        # Experiment 09 Interactive Portal & Compass View
│   ├── Lab-Experiment 8.html        # Experiment 08 Overview Portal
│   ├── Lab-Experiment 8.1.html      # Experiment 8.1 Interactive Web Version
│   ├── Lab-Experiment 8.2.html      # Experiment 8.2 Interactive Web Version
│   ├── WT LAB Experiment 10 1158.docx# Word Lab Record Document (Ex 10)
│   ├── WT LAB Experiment 9 1158.docx # Word Lab Record Document (Ex 09)
│   ├── WT LAB Experiment 8 1158.docx # Word Lab Record Document (Ex 08)
│   ├── Lab-Experiment 7.html        # Experiment 07 jQuery Portal & Exercises
│   ├── Lab-Excercise 6.html         # Experiment 06 DOM & JS Exercises
│   ├── Lab-Excercise 4.html         # Experiment 04 Advanced CSS3 Design
│   ├── Lab-Excercise 3.html         # Experiment 03 Responsive Layouts
│   ├── Lab-Excercise 2.html         # Experiment 02 HTML5 Media & Forms
│   ├── Lab-Experiment 1.html        # Experiment 01 Basic HTML Structure
│   └── images/                      # Image Assets & Textures
└── Trial/
    ├── Basic Program of HTML.html   # Basic HTML Experiments
    └── Nested HTML Elements.html    # Element Nesting & Hierarchy
```

---

## 🎨 Key Features & CSS3 Highlights (Experiment 04)

- **Multiple Backgrounds & Gradients**: Layered background images stacked with `radial-gradient` backgrounds.
- **Dynamic Corner Styling**: Four-corner values (`border-radius: 15px 50px 30px 5px`) and rounded cards.
- **Pseudo-Class States**: Input validation & focus styling using `:focus`, `:required`, `:valid`, and `:invalid`.
- **Adjacent Sibling Selectors & Opacity**: Interactive table row image reveal on text hover (`.itemName:hover + .itemImg`).
- **Alternating Table Row Styling**: Row coloring using `:nth-child(odd)` and `:nth-child(even)` selectors.

---

## 🛠️ Getting Started

### Clone Repository
```bash
git clone https://github.com/gautham75/Web-Technology-Lab.git
cd Web-Technology-Lab
```

### Local Preview
Simply open `index.html` or any file inside the `LAB experiments/` folder in your preferred web browser.

### Running Experiment 8 (ReactJS)
```bash
cd "Experiment 8/Experiment8_1"   # Or Experiment8_2 for the extended dashboard
npm install
npm run dev
```

### Running Experiment 9 (MongoDB & Compass)
```bash
# 1. Start MongoDB Daemon
mongod

# 2. Execute Shell Commands in mongosh
mongosh collegeDB "Experiment 9/queries.mongodb.js"

# 3. Or import "Experiment 9/students.json" into MongoDB Compass (collegeDB.students)
```

### Running Experiment 10 (Node.js & MongoDB)
```bash
cd Ex10
npm install
mongod           # Ensure MongoDB daemon is running on port 27017
node app.js      # Server starts on http://localhost:7000
```

---

## 👤 Author

- **Gautham Manoj** ([@gautham75](https://github.com/gautham75))
- **Register Number**: URK24CS1158
- **Course**: Web Technology Laboratory

---
*Built with ❤️ for Web Technology Lab.*
