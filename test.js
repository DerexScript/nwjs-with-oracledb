const oracledb = require('oracledb');
const config = require('./config');

(async () => {
    await oracledb.createPool(config.oracleDbConfig);
    const connOracle = await oracledb.getConnection();
    const sql = `SELECT * FROM users`;
    const users = await connOracle.execute(sql, {}, { outFormat: oracledb.OBJECT });
    connOracle.close();
    if (users.rows.length) {
        console.log(users.rows);
    }
})();