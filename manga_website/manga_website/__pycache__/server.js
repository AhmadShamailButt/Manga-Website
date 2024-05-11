const express = require('express');
const bodyParser = require('body-parser');
const DatabaseManager = require('./script');

const app = express();
app.use(bodyParser.json());

const connectionString = "Driver={SQL Server};Server=AHMAD-PC\\SQLEXPRESS;Database=manga;Trusted_Connection=yes;";
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


// Serve the HTML form for user registration
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/addUserFav.html');
});
app.use(express.static('project'));

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
