import Category from '../../models/category';
import Product from '../../models/product';
import { successResponse, errorResponse } from '../../helpers';


export const add = async (req, res) => {
  try {
    const {
      name,
      category,
      price,
      discount,
      netPrice,
      description,
    } = req.body;

    const productImage = req.file;

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return errorResponse(req, res, 'Category does not exists with given category id!', 400);
    }

    const payload = {
      name,
      category,
      image: productImage.originalname,
      price,
      discount,
      netPrice,
      description,
    };

    await Product.create(payload);
    return successResponse(req, res, 'Product Created Sucessfully!');
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const update = async (req, res) => {
  try {
    const {
      id,
      name,
      category,
      price,
      discount,
      netPrice,
      description,
    } = req.body;

    const productImage = req.file;

    const productExists = await Product.findById(id);
    if (!productExists) {
      return errorResponse(req, res, 'Product does not exists with given product id!', 400);
    }

    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return errorResponse(req, res, 'Category does not exists with given category id!', 400);
    }

    const payload = {
      name: name || productExists.name,
      category: category || productExists.category,
      image: productImage ? productImage.originalname : productExists.image,
      price: price || productExists.price,
      discount: discount || productExists.discount,
      netPrice: netPrice || productExists.netPrice,
      description: description || productExists.description,
    };

    await Product.findByIdAndUpdate(id, payload);
    return successResponse(req, res, 'Product Updated Sucessfully!');
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const list = async (req, res) => {
  try {
    const products = await Product.find().populate('category');
    return successResponse(req, res, products);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const get = async (req, res) => {
  try {
    const productData = await Product.findById(req.params.id).populate('category');
    if (!productData) {
      return errorResponse(req, res, 'Product does not exists with given product id!', 400);
    }
    return successResponse(req, res, productData);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const remove = async (req, res) => {
  try {
    const {
      id,
    } = req.body;

    const productExists = await Product.findById(id);
    if (!productExists) {
      return errorResponse(req, res, 'Product does not exists with given product id!', 400);
    }

    await Product.deleteOne({ _id: id });
    return successResponse(req, res, 'Product Deleted Sucessfully!');
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
