const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
        // BEGIN
        await client.query('BEGIN');

        // customer order 3 product
        const a1 = 'UPDATE "PrelimExam"."AS_supplier" SET supp_address = $1 WHERE supp_id =6 RETURNING *';
        const b1 = ['Lanang, Davao City'];
        const res1 = await client.query(a1, b1);

        // COMMIT
        await client.query('COMMIT');
    } catch (e) {
        // failure state
        await client.query('ROLLBACK');
        throw e;
    } finally {
        // success state
        client.release();
    }
})().catch(e => console.error(e.stack));