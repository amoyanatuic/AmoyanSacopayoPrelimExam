const pool = require('./db');

(async () => {
    const client = await pool.connect();

    try {
        // BEGIN
        await client.query('BEGIN');

        //5 supplier
        const a1 = 'INSERT INTO "PrelimExam"."AS_supplier"(supp_name, supp_address) VALUES ($1,$2) RETURNING *';
        const b1 = ['Awit, Pedro', 'Pasig, Manila'];
        const res1 = await client.query(a1, b1);

        const a2 = 'INSERT INTO "PrelimExam"."AS_supplier"(supp_name, supp_address) VALUES ($1,$2) RETURNING *';
        const b2 = ['Bern, John', 'Pasay, Manila'];
        const res2 = await client.query(a2, b2);

        const a3 = 'INSERT INTO "PrelimExam"."AS_supplier"(supp_name, supp_address) VALUES ($1,$2) RETURNING *';
        const b3 = ['Alonzo, Allan', 'Quezon, Manila'];
        const res3 = await client.query(a3, b3);

        const a4 = 'INSERT INTO "PrelimExam"."AS_supplier"(supp_name, supp_address) VALUES ($1,$2) RETURNING *';
        const b4 = ['Lapuz, Adrain', 'Matina Davao City'];
        const res4 = await client.query(a4, b4);

        const a5 = 'INSERT INTO "PrelimExam"."AS_supplier"(supp_name, supp_address) VALUES ($1,$2) RETURNING *';
        const b5 = ['Tan, Ben', 'Puan Davao City'];
        const res5 = await client.query(a5, b5);

        //5 product
        const a6 = 'INSERT INTO "PrelimExam"."AS_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
        const b6 = [2, 'Ford', 1500];
        const res6 = await client.query(a6, b6);

        const a7 = 'INSERT INTO "PrelimExam"."AS_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
        const b7 = [2, 'Kia', 500];
        const res7 = await client.query(a7, b7);

        const a8 = 'INSERT INTO "PrelimExam"."AS_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
        const b8 = [2, 'Izuzu', 100];
        const res8 = await client.query(a8, b8);

        const a9 = 'INSERT INTO "PrelimExam"."AS_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
        const b9 = [2, 'Nissan', 150];
        const res9 = await client.query(a9, b9);

        const a10 = 'INSERT INTO "PrelimExam"."AS_product"(supp_id, prod_name, prod_price) VALUES ($1,$2,$3) RETURNING *';
        const b10 = [2, 'Toyota', 50];
        const res10 = await client.query(a10, b10);

        //5 customer
        const a11 = 'INSERT INTO "PrelimExam"."AS_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
        const b11 = ['Aquino, Kris', 'Mawab, DDO'];
        const res11 = await client.query(a11, b11);

        const a12 = 'INSERT INTO "PrelimExam"."AS_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
        const b12 = ['Alonzo, Bea', 'Laak, DDO'];
        const res12 = await client.query(a12, b12);

        const a13 = 'INSERT INTO "PrelimExam"."AS_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
        const b13 = ['Racal, Mariz', 'Maco, DDO'];
        const res13 = await client.query(a13, b13);

        const a14 = 'INSERT INTO "PrelimExam"."AS_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
        const b14 = ['Andalo, Liosa', 'Pantukan, DDO'];
        const res14 = await client.query(a14, b14);

        const a15 = 'INSERT INTO "PrelimExam"."AS_customer"(cust_name, cust_address) VALUES ($1,$2) RETURNING *';
        const b15 = ['Sy, Henry ', 'Nabunturan, DDO'];
        const res15 = await client.query(a15, b15);

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