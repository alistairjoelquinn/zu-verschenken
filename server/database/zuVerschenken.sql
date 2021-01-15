CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    lat DECIMAL,
    lng DECIMAL,
    date VARCHAR(255),
    url VARCHAR(300),
    contents VARCHAR(255)
);