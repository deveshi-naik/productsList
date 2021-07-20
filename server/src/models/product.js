import mongoose from 'mongoose';

const { Schema } = mongoose;

const productSchema = new Schema({
  name: { type: String },
  category: { type: mongoose.Schema.ObjectId, ref: 'Category' },
  image: { type: String },
  price: { type: Number },
  discount: { type: Number, default: 0 },
  netPrice: { type: Number },
  description: { type: String },
},
{
  versionKey: false,
});

const Product = mongoose.model('Product', productSchema, 'Product');
module.exports = Product;
