const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
        // BEGIN
        await client.query('BEGIN');

        // customer order 3 product
        const a1 = 'INSERT INTO "PrelimExam"."AS_lineitem"(po_id, prod_id, li_qty, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const b1 = [1, 8, 3, 300];
        const res1 = await client.query(a1, b1);

        const a2 = 'INSERT INTO "PrelimExam"."AS_lineitem"(po_id, prod_id, li_qty, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const b2 = [1, 9, 3, 450];
        const res2 = await client.query(a2, b2);

        const a3 = 'INSERT INTO "PrelimExam"."AS_lineitem"(po_id, prod_id, li_qty, li_price) VALUES ($1,$2,$3,$4) RETURNING *';
        const b3 = [1, 10, 2, 100];
        const res3 = await client.query(a3, b3);

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