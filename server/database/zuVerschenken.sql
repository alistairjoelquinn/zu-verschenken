DROP TABLE IF EXISTS locations;

CREATE TABLE locations (
    id SERIAL PRIMARY KEY,
    lat NUMERIC(18, 16),
    lng NUMERIC(18, 16),
    date VARCHAR(255),
    url VARCHAR(500),
    contents VARCHAR(255)
);

INSERT INTO locations (lat, lng, date, url, contents) VALUES (52.52427079189362, 13.390191121582031, '2021-01-13T14:19:40.235Z', 'https://wawwd.files.wordpress.com/2010/06/buecher-zu-verschenken.jpg', 'books');
INSERT INTO locations (lat, lng, date, url, contents) VALUES (52.5034816923942, 13.395340962890625, '2021-01-13T14:19:40.235Z', 'https://live.staticflickr.com/65535/50119056252_44d2ce00bb_n.jpg', 'Router');
INSERT INTO locations (lat, lng, date, url, contents) VALUES (52.51654132063012, 13.41817192602539, '2021-01-13T14:19:40.235Z', 'https://www.wuerzburgerleben.de/wp-content/uploads/sites/10/2018/08/Zu-verschenken-Box-1067x800.jpg', 'Records, Glass');
INSERT INTO locations (lat, lng, date, url, contents) VALUES (52.53596686448022, 13.405297322753906, '2021-01-13T14:19:40.235Z', 'https://i.pinimg.com/originals/2a/25/17/2a251794853ba0eb6a05627e57492c16.jpg', 'Snacks / Sweets');
INSERT INTO locations (lat, lng, date, url, contents) VALUES (52.51852604436356, 13.458684010986328, '2021-01-13T14:19:40.235Z', 'https://www.gratiszuverschenken.ch/images/com_adsmanager/contents/box-line-6-zu-verschenken_6526_1.jpg', 'Guitar Amp, Bongo drum');