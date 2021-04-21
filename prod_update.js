const pool = require('./db');

const sql = 'UPDATE "PrelimExam"."AS_product" SET prod_price = $1 WHERE prod_id =2 RETURNING*';
const data = [50000000];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]); 
    }
});

pool.end();