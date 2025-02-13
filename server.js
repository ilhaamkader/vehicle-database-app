const express = require('express');
const mysql = require('mysql');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json()); // To handle JSON requests

// MySQL Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Ilhaam00751#',
  database: 'Azura',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Database connected!');
});

app.use(express.static('public'));

// Route to fetch vehicles data from the database as JSON
app.get('/api/vehicles', (req, res) => {
  db.query('SELECT * FROM vehicles', (err, results) => {
    if (err) {
      console.error('Error fetching data:', err);
      return res.status(500).send('Error fetching data');
    }
    res.json(results);
  });
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Insert Data into MySQL
app.post('/add-vehicle', (req, res) => {
  const { make, model, km, color, location, value } = req.body;

  // SQL Query to insert data into the database
  const query = 'INSERT INTO vehicles (make, model, km, color, location, value) VALUES (?, ?, ?, ?, ?, ?)';
  
  db.query(query, [make, model, km, color, location, value], (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).send('Failed to add vehicle.');
    }
    console.log('Vehicle added successfully:', result);
    res.send('Vehicle added successfully! <a href="/">Go Back</a>');
  });
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
