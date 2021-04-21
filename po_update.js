const pool = require('./db');

const sql = 'UPDATE "PrelimExam"."AS_purchasedorder" SET po_stats = $1 WHERE po_id =2 RETURNING*';
const data = ['OK'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]); 
    }
});

pool.end();