const pool = require('./db');

const sql = 'UPDATE "PrelimExam"."AS_supplier" SET supp_name = $1, supp_address = $2 WHERE supp_id =3 RETURNING*';
const data = ['Duterte, Sara Z.', 'Matina, Davao City'];

pool.query(sql, data, (err, res) => {
    if (err) {
        console.log(err.stack);
    } else {
        console.log(res.rows[0]);
    }
});

pool.end();