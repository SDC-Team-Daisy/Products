CREATE TABLE products (
 id BIGSERIAL,
 name VARCHAR(400),
 slogan TEXT,
 description TEXT,
 category VARCHAR(400),
 default_price INTEGER
);


ALTER TABLE products ADD CONSTRAINT products_pkey PRIMARY KEY (id);

CREATE TABLE features (
 id BIGSERIAL,
 feature VARCHAR(400),
 value VARCHAR(400)
);


ALTER TABLE features ADD CONSTRAINT features_pkey PRIMARY KEY (id);

CREATE TABLE styles (
 id BIGSERIAL,
 name VARCHAR(400),
 original_price INTEGER,
 sale_price INTEGER,
 default? BOOLEAN,
 id_products INTEGER
);


ALTER TABLE styles ADD CONSTRAINT styles_pkey PRIMARY KEY (id);

CREATE TABLE photos (
 id BIGSERIAL,
 thumbnail_url VARCHAR(400),
 url VARCHAR(400),
 id_styles INTEGER
);


ALTER TABLE photos ADD CONSTRAINT photos_pkey PRIMARY KEY (id);

CREATE TABLE skus (
 id BIGSERIAL,
 sku_number INTEGER,
 quantity INTEGER,
 size VARCHAR(50),
 id_styles INTEGER
);


ALTER TABLE skus ADD CONSTRAINT skus_pkey PRIMARY KEY (id);

CREATE TABLE join_table (
 id BIGSERIAL,
 id_products INTEGER,
 id_features INTEGER
);


ALTER TABLE join_table ADD CONSTRAINT join_table_pkey PRIMARY KEY (id);

ALTER TABLE styles ADD CONSTRAINT styles_id_products_fkey FOREIGN KEY (id_products) REFERENCES products(id);
ALTER TABLE photos ADD CONSTRAINT photos_id_styles_fkey FOREIGN KEY (id_styles) REFERENCES styles(id);
ALTER TABLE skus ADD CONSTRAINT skus_id_styles_fkey FOREIGN KEY (id_styles) REFERENCES styles(id);
ALTER TABLE join_table ADD CONSTRAINT join_table_id_products_fkey FOREIGN KEY (id_products) REFERENCES products(id);
ALTER TABLE join_table ADD CONSTRAINT join_table_id_features_fkey FOREIGN KEY (id_features) REFERENCES features(id);