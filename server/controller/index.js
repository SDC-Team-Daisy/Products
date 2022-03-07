const model = require('../model');

module.exports = {
  getAllProductsReq: function (req, res) {
    model.getAllProducts((err, prod) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(prod);
      }
    });
  },

  getProductReq: function (req, res) {
    model.getProduct(req.params.id, (err, prod) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(prod);
      }
    });
  },

  getStylesReq: function (req, res) {
    model.getStyles(req.params.id, (err, prod) => {
      if (err) {
        console.log(err)
        res.sendStatus(500);
      } else {
        res.send(prod);
      }
    });
  }
};