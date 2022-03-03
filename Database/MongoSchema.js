const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/3000');

const productsSchema = new mongoose.Schema ({
  name: String,
  slogan: String,
  description: String,
  category: String,
  default_price: Number,
});

const featuresSchema = new mongoose.Schema ({
  feature: String,
  value: String,
});

const stylesSchema = new mongoose.Schema ({
  name: String,
  original_price: Number,
  sale_price: Number,
  default: Boolean,
});

const photoSchema = new mongoose.Schema ({
  thumbnail_url: String,
  url: String,
});

const skusSchema = new mongoose.Schema ({
  sku_number: Number,
  quantity: Number,
  size: String,
});

const Products = mongoose.model('Products', productsSchema);
const Features = mongoose.model('Features', featuresSchema);
const Styles = mongoose.model('Styles', stylesSchema);
const Photos = mongoose.model('Photos', photoSchema);
const Skus = mongoose.model('Skus', skusSchema);

module.exports = {
  Products,
  Features,
  Styles,
  Photos,
  Skus,
}