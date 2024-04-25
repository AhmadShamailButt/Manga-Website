const express = require('express');
const bodyParser = require('body-parser');
const DatabaseExecuter = require('./index');

const app = express();
app.use(bodyParser.json());

const connectionString = "Driver={SQL Server};Server=Ahmad-PC\\SQLEXPRESS;Database=manga;Trusted_Connection=yes;";
const dbManager = new DatabaseExecuter(connectionString);

// Serve static files from the project directory
app.use(express.static(__dirname));

// Endpoint to search for an item
app.post('/CheckUser', async (req, res) => {
    const { UserName, Password } = req.body;

    try {
        const userDetails = await dbManager.CheckUser(UserName, Password); 
        console.log(userDetails);
        
        if (userDetails && userDetails.user_name) { // Check if userDetails is truthy and contains user_name
            res.json({ success: true, message: "User Found", result: userDetails });
        } else {
            res.status(401).json({ success: false, message: "Invalid username or password" });
        }
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});




// Serve the HTML form for user registration
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/search.html'); // Corrected file name
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});