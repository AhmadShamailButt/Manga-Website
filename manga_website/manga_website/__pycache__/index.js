const odbc = require('odbc');

// Configuration for ODBC connection
const config = {
    connectionString: "Driver={SQL Server};Server=AHMAD-PC\\SQLEXPRESS;Database=manga;Trusted_Connection=yes;"
};

// Establishing connection to the database
odbc.connect(config, function(err, connection) {
    if (err) {
        console.error(err);
        return;
    }

    // SQL query to select all records from the 'users' table
    const query = "SELECT * FROM [users]"; // Corrected: table name wrapped in square brackets

    // Executing the SQL query
    connection.query(query, function(err, rows, moreResultSets) {
        if (err) {
            console.error(err);
        } else {
            console.log(rows);
        }

        // Closing the database connection when done
        connection.close(function(err) {
            if (err) {
                console.error(err);
            } else {
                console.log("Connection closed.");
            }
        });
    });
});
