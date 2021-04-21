const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
        // BEGIN
        await client.query('BEGIN');

        // 3 products ordered
        const a1 = 'SELECT * FROM "PrelimExam"."AS_purchasedorder"';
        const res1 = await client.query(a1);

        // view PO
        res1.rows.forEach(el =>
            console.log(
                `SUPPLIER ID: ${el.supp_id}, CUSTOMER ID: ${el.cust_id}, DATE: ${el.po_date}, STATUS: ${el.po_status}`
            )
        );

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