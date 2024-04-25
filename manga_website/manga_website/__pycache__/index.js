const odbc = require('odbc');

class DatabaseExecuter {
    constructor(connectionString) {
        this.connectionString = connectionString;
    }

    connect() {
        return new Promise((resolve, reject) => {
            odbc.connect(this.connectionString, (err, connection) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(connection);
                }
            });
        });
    }
    async CheckUser(UserName, Password) {
        try {
            const connection = await this.connect();
            const sql = `exec spLoginUser @Username = ?, @Password = ?`; // Use parameterized query
            return new Promise((resolve, reject) => {
                connection.query(sql, [UserName, Password], (err, result) => {
                    if (err) {
                        console.error('Error executing SQL statement:', err);
                        connection.close();
                        reject(err);
                    } else {
                        console.log(result.length + result[0].user_name);
                        if (result.length > 0 && result[0].Status === 'Login successful') {
                            const userDetails = {
                                user_name: result[0].user_name,
                                user_type: result[0].user_type,
                                join_date: result[0].join_date,
                                age: result[0].age
                            };
                            connection.close();
                            resolve(userDetails);
                        } else {
                            connection.close();
                            console.log("kja");
                            reject(new Error('Login failed'));
                        }
                    }
                });
            });
        } catch (error) {
            console.error('Error connecting to database:', error);
            throw error; // Rethrow the error so it can be caught by the caller
        }
    }
          
 
}

module.exports =DatabaseExecuter;
