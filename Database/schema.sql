DROP DATABASE IF EXISTS sdcproducts;
CREATE DATABASE sdcproducts;

\c sdcproducts;

DROP TABLE IF EXISTS products, features, styles, photos, skus;

CREATE TABLE products (
 id BIGSERIAL PRIMARY KEY,
 name VARCHAR(400) NOT NULL,
 slogan TEXT NOT NULL,
 description TEXT NOT NULL,
 category VARCHAR(400) NOT NULL,
 default_price INTEGER NOT NULL
);

CREATE TABLE features (
 id BIGSERIAL PRIMARY KEY,
 product_id INTEGER,
 feature VARCHAR(400) NOT NULL,
 value VARCHAR(400) NOT NULL
);

CREATE TABLE styles (
 id BIGSERIAL PRIMARY KEY,
 product_id INTEGER,
 name VARCHAR(400),
 sale_price INTEGER DEFAULT 0,
 original_price INTEGER NOT NULL,
 default_style BOOLEAN NOT NULL
);

CREATE TABLE photos (
 id BIGSERIAL PRIMARY KEY,
 style_id INTEGER,
 thumbnail_url VARCHAR,
 url VARCHAR
);

CREATE TABLE skus (
 id BIGSERIAL PRIMARY KEY,
 style_id INTEGER,
 size VARCHAR(50) NOT NULL,
 quantity INTEGER NOT NULL
);

\COPY products FROM '/Users/alvinakwon/HackReactor/SDC/SDC-products/Data/product.csv' DELIMITER ',' CSV HEADER;
\COPY features FROM '/Users/alvinakwon/HackReactor/SDC/SDC-products/Data/features.csv' DELIMITER ',' CSV HEADER;
\COPY styles FROM '/Users/alvinakwon/HackReactor/SDC/SDC-products/Data/styles.csv' DELIMITER ',' CSV NULL AS 'null' HEADER;
UPDATE styles SET sale_price=0 WHERE sale_price IS NULL;
\COPY photos FROM '/Users/alvinakwon/HackReactor/SDC/SDC-products/Data/photos.csv' DELIMITER ',' CSV HEADER;
\COPY skus FROM '/Users/alvinakwon/HackReactor/SDC/SDC-products/Data/skus.csv' DELIMITER ',' CSV HEADER;

ALTER TABLE features ADD CONSTRAINT features_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE styles ADD CONSTRAINT styles_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id);
ALTER TABLE photos ADD CONSTRAINT photos_style_id_fkey FOREIGN KEY (style_id) REFERENCES styles(id);
ALTER TABLE skus ADD CONSTRAINT skus_style_id_fkey FOREIGN KEY (style_id) REFERENCES styles(id);

CREATE INDEX ON features (product_id);
CREATE INDEX ON photos (style_id);
CREATE INDEX ON skus (style_id);
CREATE INDEX ON styles (product_id);