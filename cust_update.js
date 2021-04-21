const pool = require('./db');

const sql = 'UPDATE "PrelimExam"."AS_customer" SET cust_name = $1, cust_address = $2 WHERE cust_id =5 RETURNING*';
const data = ['DUTERTE, RODRIGO S.', 'CATITIPAN, DAVAO CITY'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();