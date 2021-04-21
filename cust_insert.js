const pool = require('./db');

const sql = 'INSERT INTO "PrelimExam"."AS_customer" (cust_name, cust_address) VALUES ($1,$2) RETURNING*';
const data = ['Aquino, Bimby.', 'Puan, Davao City'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();