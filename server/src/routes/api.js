import express from 'express';
import validate from 'express-validation';
import multer from 'multer';

import * as categoryController from '../controllers/category/category.controller';
import * as categoryValidator from '../controllers/category/category.validator';

import * as productController from '../controllers/product/product.controller';
import * as productValidator from '../controllers/product/product.validator';

const router = express.Router();

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, './public');
  },
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});
const upload = multer({ storage });

// categories APIs
router.post(
  '/category/add',
  validate(categoryValidator.add),
  categoryController.add,
);

router.post(
  '/category/update',
  validate(categoryValidator.update),
  categoryController.update,
);

router.post(
  '/category/remove',
  validate(categoryValidator.remove),
  categoryController.remove,
);
router.get('/category/list', categoryController.list);

// Product APIs
router.post(
  '/product/add',
  upload.single('file'),
  validate(productValidator.add),
  productController.add,
);

router.post(
  '/product/update',
  upload.single('file'),
  validate(productValidator.update),
  productController.update,
);

router.post(
  '/product/remove',
  validate(productValidator.remove),
  productController.remove,
);

router.get('/product/get/:id', productController.get);

router.get('/product/list', productController.list);

module.exports = router;
