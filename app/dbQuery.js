
import pg from "pg";
import initDb from './sequelize.js';
const { Pool } = pg;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "postgres",
    password: "postgres",
    port: 5432,
})
await initDb()

export default async function getQueryResult() {

    let obj
    try {
        const res = await pool.query('SELECT value_path_mapping_json_key, flora_value, mapping_value FROM "mapping".calculation_field_mapping');
        obj = res.rows;
    } catch (err) {
        console.error(err);
    } finally {
        pool.end();
    }
    return obj

}


