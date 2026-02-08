// backend/server.js
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Simulated users database
let users = [
  { id: 1, name: "John Doe", email: "john@demo.com", password: "123456" }
];

// Home route
app.get("/", (req, res) => {
  res.send("Backend running 🚀");
});

// Get all users
app.get("/api/users", (req, res) => {
  res.json(users.map(u => ({ id: u.id, name: u.name, email: u.email })));
});

// Login route
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if(user){
    res.json({ success: true, message: "Login successful!", user: { id: user.id, name: user.name } });
  } else {
    res.json({ success: false, message: "Invalid email or password." });
  }
});

// Signup route
app.post("/api/signup", (req, res) => {
  const { name, email, password } = req.body;
  const exists = users.find(u => u.email === email);
  if(exists){
    return res.json({ success: false, message: "Email already exists." });
  }
  const newUser = { id: users.length+1, name, email, password };
  users.push(newUser);
  res.json({ success: true, message: "Signup successful!", user: { id: newUser.id, name: newUser.name } });
});

// Contact form submission
app.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;
  console.log("New contact message:", req.body);
  res.json({ success: true, message: "Message received. We will contact you soon!" });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
