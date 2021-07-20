import mongoose from 'mongoose';

const { Schema } = mongoose;

const categorySchema = new Schema({
  name: {
    type: String,
  },
},
{
  versionKey: false,
});

const Category = mongoose.model('Category', categorySchema, 'Category');
module.exports = Category;
