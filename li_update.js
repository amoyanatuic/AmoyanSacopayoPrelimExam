const pool = require('./db');

const sql = 'UPDATE "PrelimExam"."AS_lineitem" SET li_qty = $1, li_price = $2 WHERE po_id =2 RETURNING*';
const data = [50, 2500];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]); 
    }
});

pool.end();