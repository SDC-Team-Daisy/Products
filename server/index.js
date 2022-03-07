const express = require('express');
const app = express();
const PORT = 3000 || process.env.PORT;
const controller = require('./controller');

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('client/dist'));

app.get('/products', controller.getAllProductsReq);
app.get('/products/:id', controller.getProductReq);
app.get('/products/:id/styles', controller.getStylesReq);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

module.exports = app;