const { Pool } = require('pg')

const pool = new Pool({
  user: 'alvinakwon',
  host: 'localhost',
  database: 'sdcproducts',
  port: 5432,
})

module.exports = {
  // getAllProducts: function (callback) {
  //   let queryString = 'SELECT * FROM products WHERE id = 1';
  //   pool.query(queryString, (err, prod) => {
  //     callback(err, prod)
  //   })
  // },

  getProduct: function (id, callback) {
    let queryString = 'SELECT * FROM products WHERE id = $1';
    let queryArgument = [id]
    pool.query(queryString, queryArgument, (err, prod) => {
      callback(err, prod)
    })
  },

  getStyles: function (callback) {
    let queryString = 'SELECT * FROM products LIMIT 10';
    pool.query(queryString, (err, prod) => {
      callback(err, prod)
    })
  }
 }