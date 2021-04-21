const pool = require('./db');

const sql = 'INSERT INTO "PrelimExam"."AS_lineitem" (po_id, prod_id, li_qty, li_price) VALUES ($1,$2,$3,$4) RETURNING*';
const data = [2, 2, 199, 699];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();