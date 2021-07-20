import Category from '../../models/category';
import { successResponse, errorResponse } from '../../helpers';


export const add = async (req, res) => {
  try {
    const {
      name,
    } = req.body;

    const categoryExists = await Category.findOne({ name });
    if (categoryExists) {
      return errorResponse(req, res, 'Category already exists with same name', 400);
    }

    await Category.create({ name });
    return successResponse(req, res, 'Category Created Sucessfully!');
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const update = async (req, res) => {
  try {
    const {
      id,
      name,
    } = req.body;

    const categoryExists = await Category.findById(id);
    if (!categoryExists) {
      return errorResponse(req, res, 'Category does not exists with given id', 400);
    }

    await Category.findByIdAndUpdate(id, { name });
    return successResponse(req, res, 'Category Updated Sucessfully!');
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const list = async (req, res) => {
  try {
    const categories = await Category.find();
    return successResponse(req, res, categories);
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};

export const remove = async (req, res) => {
  try {
    const {
      id,
    } = req.body;

    const categoryExists = await Category.findById(id);
    if (!categoryExists) {
      return errorResponse(req, res, 'Category does not exists with given id', 400);
    }

    await Category.deleteOne({ _id: id });
    return successResponse(req, res, 'Category Deleted Sucessfully!');
  } catch (error) {
    return errorResponse(req, res, error.message);
  }
};
