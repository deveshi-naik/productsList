import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import User from '../../models/user';
import { successResponse, errorResponse } from '../../helpers';


export const register = async (req, res) => {
  try {
    const {
      email, password, name,
    } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return errorResponse(req, res, 'User already exists with same email', 400);
    }
    const reqPass = crypto
      .createHash('md5')
      .update(password)
      .digest('hex');
    const payload = {
      email,
      name,
      password: reqPass,
    };

    await User.create(payload);
    return successResponse(req, res, 'User Created Sucessfully!');
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const login = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return errorResponse(req, res, 'Incorrect Email Id/Password', 401);
    }
    const reqPass = crypto
      .createHash('md5')
      .update(req.body.password || '')
      .digest('hex');
    if (reqPass !== user.password) {
      return errorResponse(req, res, 'Incorrect Email Id/Password', 401);
    }
    const token = jwt.sign(
      {
        user: {
          userId: user.id,
          email: user.email,
          createdAt: new Date(),
        },
      },
      process.env.JWT_SECRET,
    );
    return successResponse(req, res, { token });
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
