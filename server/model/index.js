const pool = require('./pgpool.js')

module.exports = {
  getAllProducts: function (callback) {
    let queryString = 'SELECT * FROM products LIMIT 10';
    pool.query(queryString, (err, prod) => {
      callback(err, prod)
    })
  },

  getProduct: function (id, callback) {
    let queryString = `SELECT products.*,
    json_agg(
      json_build_object(
        'feature', features.feature,
        'value', features.value
      )
    ) AS features FROM products JOIN features ON products.id=features.product_id WHERE products.id=$1 GROUP BY products.id`;
    let queryArgument = [id]
    pool.query(queryString, queryArgument, (err, prod) => {
      callback(err, prod)
    })
  },

  getStyles: function (id, callback) {
    let queryString = `
    SELECT styles.product_id,
    (SELECT json_agg
      (json_build_object
        ('style_id', styles.id,
        'name', styles.name,
        'original_price', styles.original_price,
        'sale_price', styles.sale_price,
        'default?', styles.default_style,
        'photos', (SELECT
          json_agg(
            json_build_object(
              'thumbnail_url', photos.thumbnail_url,
              'url', photos.url)
            )FROM photos WHERE photos.style_id=styles.id
          ),
        'skus', (SELECT
          json_object_agg(
            skus.id,
            json_build_object(
              'quantity', skus.quantity,
              'size', skus.size)
            ) FROM skus WHERE skus.style_id=styles.id
          )
        )
      ) AS results FROM styles WHERE styles.product_id=$1
    ) FROM styles WHERE styles.product_id=$1
    `
    let queryArgument = [id]
    pool.query(queryString, queryArgument, (err, prod) => {
      callback(err, prod)
    })
  }
 };