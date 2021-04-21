const pool = require('./db');

const sql = 'INSERT INTO "PrelimExam"."AS_purchasedorder" (supp_id, cust_id, po_date, po_stats) VALUES ($1,$2,$3,$4) RETURNING*';
const data = [3, 2,'2021-04-10','Released'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();