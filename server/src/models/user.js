import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const { Schema } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  name: {
    type: String,
  },
},
{
  versionKey: false,
});


const User = mongoose.model('User', userSchema, 'User');
module.exports = User;
