const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Create a MySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Default XAMPP MySQL username
  password: "", // Default XAMPP MySQL password
  database: "notes_app", // Your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
  } else {
    console.log("Connected to MySQL database");
  }
});

// API to fetch all notes
app.get("/notes", (req, res) => {
  const sql = "SELECT * FROM notes";
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(results);
  });
});

// API to add a new note
app.post("/notes", (req, res) => {
  const { text } = req.body;
  const sql = "INSERT INTO notes (text) VALUES (?)";
  db.query(sql, [text], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: results.insertId, text, createdAt: new Date() });
  });
});

// API to update a note
app.put("/notes/:id", (req, res) => {
  const { id } = req.params;
  const { text } = req.body;
  const sql = "UPDATE notes SET text = ? WHERE id = ?";
  db.query(sql, [text, id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id, text });
  });
});

// API to delete a note
app.delete("/notes/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM notes WHERE id = ?";
  db.query(sql, [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ message: 'Note deleted' });
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});