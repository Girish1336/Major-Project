const { Client } = require("pg");
const client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'postgres',
    password: 'Girish@1336',
    database: 'online_vidya'
});
client.connect();
client.query("INSERT INTO students VALUES(2,'Greez','1234567890','greez69@gmail.com','Web development')", (err, result) => {
    if (!err) {
        console.log("Data inserted successfully to the students table!");
    }
    client.end();
});