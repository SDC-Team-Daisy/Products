const model = require('../model');

module.exports = {
  // getAllProductsReq: function (req, res) {
  //   model.getAllProducts((err, prod) => {
  //     if (err) {
  //       res.sendStatus(500);
  //     } else {
  //       res.send(prod);
  //     }
  //   });
  // },

  getProductReq: function (req, res) {
    // console.log('req', req.params.id)
    model.getProduct(req.params.id, (err, prod) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(prod);
      }
    });
  },

  getStylesReq: function (req, res) {
    model.getStyles((err, prod) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.send(prod);
      }
    });
  }
}

