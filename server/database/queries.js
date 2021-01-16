const dbConfig = require('./dbConfig');
const db = dbConfig(process.env.DATABASE_URL || `postgres:postgres:postgres@localhost:5432/zu-verschenken`);

module.exports.getInitialLocations = () => {
    return db.query(
        `SELECT * FROM locations`
    );
};

module.exports.insertNewLocation = (lat, lng, date, url, contents) => {
    return db.query(
        `INSERT INTO locations (lat, lng, date, url, contents) 
        VALUES ($1, $2, $3, $4, $5)
        RETURNING *`,
        [lat, lng, date, url, contents]
    );
};