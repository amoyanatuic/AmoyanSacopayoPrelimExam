const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
        // BEGIN
        await client.query('BEGIN');

        // bases whether customer canceled the order or not
        const isCustomerCancel = true;

        // 3 product ordered
        const a1 = 'INSERT INTO "PrelimExam"."AS_lineitem" (po_id, prod_id, li_qty, li_price) VALUES ($1,$2,$3,$4) RETURNING*';
        const b1 = [2, 6, 1, 1500];
        const res1 = await client.query(a1, b1);

        // if customer decide to canceled, throws an error
        if (isCustomerCancel) { 
            throw '\nERROR: Customer Order Canceled!!';
        }

        // COMMIT
        await client.query('COMMIT');
    } catch (e) {
        // failure state
        await client.query('ROLLBACK');
        console.error(e);
        console.log('Failure State: Transaction Rollback!');
        throw e;
    } finally {
        // success state
        client.release();
    }
})().catch(e => console.error(e.stack));