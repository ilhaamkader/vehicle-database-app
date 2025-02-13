# Vehicle Database App

## 📌 Overview

The **Vehicle Database App** is a simple web application built using **Node.js, Express, and MySQL** that allows users to **add vehicle details** and **view captured vehicles**. The app provides a form for users to enter vehicle details and stores them in a MySQL database. Users can also view all added vehicles in a table format. I made this to test how to use MySQL and node.js since I haven't them before. 

*This is an experiment/test project.*

## ✨ Features

- 🚗 **Add Vehicle Information** (Make, Model, KM, Color, Location, Value)
- 💾 **Store vehicle details in MySQL database**
- 📋 **Retrieve and display vehicle details in a table**
- 🎨 **Styled UI with background image and responsive design**

## 🛠 Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MySQL
- **Frontend:** HTML, CSS, JavaScript
- **Version Control:** Git & GitHub

## 🚀 Installation & Setup

### 🔹 Prerequisites

Make sure you have the following installed:

- [📥 Node.js](https://nodejs.org/)
- [📥 MySQL](https://www.mysql.com/)
- [📥 Git](https://git-scm.com/)

### 📝 Steps to Set Up the Project

1. **Clone the repository**
   ```sh
   git clone https://github.com/ilhaamkader/vehicle-database-app.git
   cd vehicle-database-app
   ```

2. **Install dependencies**
   ```sh
   npm install
   ```

3. **Set up the MySQL database**
   - Create a MySQL database named `azura`.
   - Run the provided SQL script (if applicable) to create tables.

4. **Configure Environment Variables**
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     DB_HOST=your_database_host
     DB_USER=your_database_user
     DB_PASSWORD=your_database_password
     DB_NAME=azura
     ```

5. **Start the server**
   ```sh
   npm start
   ```
   The app should now be running at `http://localhost:3000`

## 📁 Folder Structure

```
vehicle-database-app/
│── public/             # Contains HTML & CSS files
│── server.js           # Main server file
│── package.json        # Dependencies & scripts
│── README.md           # Project documentation
```

## 🎯 Usage

- Open [`http://localhost:3000`](http://localhost:3000) in your browser.
- Add a vehicle using the form.
- Click **"View Vehicle Details"** to see the list of captured vehicles.

## 🤝 Contributing

If you'd like to contribute:

1. **Fork** the repository.
2. **Create a new branch.**
3. **Make your changes and commit them.**
4. **Push to your fork and submit a Pull Request.**

## 📜 License

This project is licensed under the **MIT License**.

---

### 👤 Author: Ilhaam Kader  
🔗 **GitHub:** [ilhaamkader](https://github.com/ilhaamkader)
