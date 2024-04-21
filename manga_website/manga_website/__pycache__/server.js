const express = require('express');
const bodyParser = require('body-parser');
const DatabaseManager = require('./index'); // Adjust path based on your project structure

const app = express();
app.use(bodyParser.json());

const connectionString = "Driver={SQL Server};Server=DRAGON-8\\SQLEXPRESS;Database=manga;Trusted_Connection=yes;";
const dbManager = new DatabaseManager(connectionString);

// Endpoint to execute a query
app.post('/executeQuery', async (req, res) => {
    const { sql } = req.body;

    try {
        const rows = await dbManager.query(sql);
        res.json({ success: true, rows });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Endpoint to register a new user
app.post('/registerUser', async (req, res) => {
    const { username, password, userStatus, userType, joinDate } = req.body;

    try {
        await dbManager.insertUser(username, password, userStatus, userType, joinDate);
        res.json({ success: true, message: "User registered successfully" });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Serve the HTML form for user registration
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
