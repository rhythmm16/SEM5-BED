const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Serve static files from the current directory
app.use(express.static(__dirname));

// Serve index.html at the root URL
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

const USERS_FILE = path.join(__dirname, "users.json");

app.post("/login", (req, res) => {
    const { username, password } = req.body;
    fs.readFile(USERS_FILE, "utf8", (err, data) => {
        if (err) return res.status(500).json({ message: "Server error" });
        const users = JSON.parse(data);
        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            res.json({ success: true, message: "Login successful" });
        } else {
            res.status(401).json({ success: false, message: "Invalid credentials" });
        }
    });
});

app.post("/logout", (req, res) => {
    // For demo, just respond success
    res.json({ success: true, message: "Logged out" });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Access the application at: http://localhost:${PORT}`);
});