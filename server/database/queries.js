const dbConfig = require('./dbConfig');
const db = dbConfig(process.env.DATABASE_URL || `postgres:postgres:postgres@localhost:5432/zu-verschenken`);

module.exports.getInitialLocations = () => {
    return db.query(
        `SELECT * FROM locations`
    );
};